const express = require('express');
const JSEncrypt = require('node-jsencrypt');
const svgCaptcha = require('svg-captcha');
const redis = require('redis');
const nodemailer = require('nodemailer');
const jwt = require('jwt-simple');
const multer = require('multer');
const { wxData, wxMailList, day4ListData, day5FootList } = require('./data.js');
const {
	find,
	getUserInfoByUsername,
	register,
	resetPassword,
	list,
	deleteItem,
	addItem,
	uploadAdd,
	getUploadList,
	addBanner,
	getBannerList,
	deleteBanner
} = require('./utils');

var storage = multer.diskStorage({
	destination: function(req, file, cb) {
		// 接收到文件后输出的保存路径（若不存在则需要创建）
		cb(null, 'public/images/');
	},
	filename: function(req, file, cb) {
		// 将保存文件名设置为 时间戳 + 文件原始名，比如 151342376785-123.jpg
		cb(null, Date.now() + '-' + file.originalname);
	}
});
var upload = multer({ dest: 'public/images/', storage: storage });

//token仓库
let tokenHistory = [];
//token加密的key
let secret = 'xxx';
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

const client = redis.createClient();
//如果没有启动redis,会报错，启动redis方法，在cd到redis的安装目录，执行redis-server.exe redis.windows.conf
client.on('error', function(err) {
	console.log('Error ' + err);
});

//允许跨域
app.use('*', (req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , token'
	);
	res.header(
		'Access-Control-Allow-Methods',
		'PUT, POST, GET, DELETE, OPTIONS'
	); //设置方法
	res.header('Access-Control-Max-Age', '1000'); // 1000s之内，不需要再发送预请求进行验证了，时间内直接发正式请求
	next();
});

// async..await is not allowed in global scope, must use a wrapper
async function sendEmail(username, email, url) {
	// Generate test SMTP service account from ethereal.email
	// Only needed if you don't have a real mail account for testing
	let testAccount = await nodemailer.createTestAccount();

	// create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport({
		host: 'smtp.sina.cn',
		// service: 'qq',
		// port: 465,
		//secure: false, // true for 465, false for other ports
		secureConnection: true, // 使用了 SSL
		auth: {
			user: '13642061747@sina.cn', // generated ethereal user
			pass: 'xu1702h' // generated ethereal password
		}
	});

	// send mail with defined transport object
	let info = await transporter.sendMail({
		from: '<13642061747@sina.cn>', // sender address
		to: email, // list of receivers
		subject: '重新设置密码', // Subject line
		html: `<b>${username}您好！您可以点击下面的链接设置新的密码</b>
    <a href=${url}>${url}</a>` // html body
	});

	console.log('Message sent: %s', info.messageId);
	// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

	// Preview only available when sending through an Ethereal account
	console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
	// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

//生成token
function getID(length) {
	return Number(
		Math.random()
			.toString()
			.substr(3, length) + Date.now()
	).toString(36);
}

//获取token是否过期
function getTokenAuth(token) {
	for (let i = 0; i < tokenHistory.length; i++) {
		if (tokenHistory[i].token === token) {
			if (tokenHistory[i].auth) {
				tokenHistory[i].lastTime = new Date().getTime();
			}
			return tokenHistory[i].auth;
		}
	}
	return false;
}

//删除过期的token
function deleteTokenHistory(token) {
	for (let i = 0; i < tokenHistory.length; i++) {
		if (tokenHistory[i].token === token) {
			tokenHistory.splice(i, 1);
		}
	}
}

//定时检查token是否过期
setInterval(() => {
	let now = new Date().getTime();
	for (let i = 0; i < tokenHistory.length; i++) {
		if (tokenHistory[i].auth && now - tokenHistory[i].lastTime > 300000) {
			tokenHistory[i].auth = false;
		}
	}
	if (tokenHistory.length) {
		console.log(tokenHistory);
	}
}, 10000);

//登陆
app.post('/login', async function(req, res) {
	let { username, password, captcha } = req.body;
	console.log(password);
	let token = req.headers['token'];
	console.log(captcha);
	let redisCaptcha = await new Promise(resolve => {
		client.get(token, function(err, res) {
			return resolve(res);
		});
	});
	console.log('login', redisCaptcha);
	if (captcha && captcha === redisCaptcha) {
	} else {
		res.send({
			code: 400,
			message: '验证码错误或过期'
		});
		return;
	}
	password = password.replace(/%2B/g, '+');
	let decrypt = new JSEncrypt();
	decrypt.setPrivateKey(
		'MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCBlsrfdbHJOb6ZCWeukOGuVGVIyLnjNJUpQgK+HbfgN83n9Q65F3nFwhDXvNIZf+m21xkz3mlMm/UwcOPgW+MS1YDJfetMv/q0aLHJVma/lP3eiTpld7pkPIkhDmZutAUGHb+Kb3aA4j6IYh5tvQWKERgKqvULTyKT+mnGK2vr4OjtscvUtl5h1gBD+GChj0gjO3Y3lAGUU6Zowr32iZIhDda7qiN82VroQ1Z2ZbfLHDsXSwNZA43R2xhA6JTDwNDxRXkdYF//BuGlNYcqt9YCTeTNmEPUAUGG2fCRAq+XQdAuXeQ/9uMEOrShwWwK2iS9DHKsHVzQk6qXL17yHNT9AgMBAAECggEAT1IwvdU5zLUW0G/sUfMG4QFxubp75fICt21bZmmkao9d7vSWXX9cH0tpqdQ/OjKMqUlCePhTtfvkehEvut4jwRyEp1D3HVSJrbJD2LyVSgF136hZ4VAG/GH9gglhc7OnO5Yr7x3JCJzzr+F3RK6l3FwYPjdkpNZ8kN1/rzhW59syV5SSfZxhqS8j454tow6vdhjIHhsuZj/JR1yo6zp+Jgh1m/Js2tPq/3VtbhUsyWLbkUxZ0hFtlAIDhYYyu//9eHthEgelgXePXuPXTLb234PjTFs5gh17qiMozVJGuJLdOuw5SPggXkOwoM05yNyk1VcYVnA6PLh9uqy6J/vg4QKBgQDWuJh+qoFOniUH7DIob0LootQQZX8JEPu1opn308Ee3MurWImD8iB6Sgv4v1p5cggxz180uINf8CgfnKnRFY7iZE4rrHDhpepnJjc3EoFuBr4qOkKxt4+UpfpW+akingL6e2+TsE3hiWn7+anQ2CDHBtewb1zPmcEUCoXhGhwiyQKBgQCagHXXYKZkQP8ONt68d613cmnsarJ+A7WTPLsT9FdR/ue5f2XfLZieiJrz1XE3gNT0M4uGwQ1K5xGVDxAlDowICTR62bLTfcrlgDEabX7Ie6LoKHn94DuzYJp0hGIOoW/B/MUm1jGnabmRwd5fMN7kYkTHW76GOgCdtworFpzmlQKBgAKWmw/70i82bM/ZowklvjK7s7622n8rez1HRn/cR5mto67fFFlI0+dleRt4gwivvTWMgGNMThkb9f/bjZh9oAlOmDqii4HM1DSGG2hIitLetfAgX6lwwwRRs+DUhZtrODH4xvGK0IWFeIeXDNr9n/eGN5di4EWIXvF05wQ9olUxAoGAGFOnulzWdiyhvEw5b/VsE8WpFfeK2TqeSWujjTXI1flL5TJBCQ313OhndYMjC3k2jqjbDEGzZRrS8uRnR15uAAnrAHjspk5FNzOjB6U79Dc7ZFCTPL0kyU6pozUA94rFvQaeyEmrkc+cz212JQjd35n1eGpiqmHRnQOoDzbFR60CgYBYdZj0hYgVXVeSgZVWQGteLi46s/puRLgLZLjudqUZcQIq4GwBpVfSbsfuy+HjBc1GhlYpMp6ZZPzvPKasYyyFy2lgJj0AT7INuA9bnILYvqMzeCVL8RrEFrIGff64mxIMN/qE9uu+e9x2nWYdfXPfjaL6r7eOaZ59kE5UsCg/gA=='
	);
	password = decrypt.decrypt(password);
	const data = await find(username);
	if (!data.password) {
		res.send({
			code: 400,
			message: '用户名不存在'
		});
		return;
	}
	console.log(data);
	let dbPassword = data.password;
	if (password === dbPassword) {
		let token = getID(10);
		tokenHistory.push({
			token: token,
			lastTime: new Date().getTime(),
			auth: true
		});
		res.send({
			code: 200,
			data: {
				username: username,
				token: token
			},
			message: '登陆成功'
		});
	} else {
		res.send({
			code: 400,
			message: '登陆密码错误'
		});
	}
});

app.get('/login_out', async function(req, res) {
	let token = req.headers['token'];
	deleteTokenHistory(token);
	res.send({
		code: 200,
		message: '退出成功'
	});
});

//验证码
app.get('/captcha', function(req, res) {
	var captcha = svgCaptcha.create({});
	let text = captcha.text.toLowerCase();
	captchaId = getID(10);
	let temp = {
		captchaId: captchaId,
		captcha: captcha.data
	};
	client.set(captchaId, text, 'EX', 60); //60秒后验证码过期知道
	client.get(captchaId, function(err, v) {
		console.log('图形验证码的值存入redis，值为：', v);
	});
	res.send({
		code: 200,
		data: temp,
		message: '验证码'
	});
});

//忘记密码
app.get('/forgot_password', async function(req, res) {
	let { username } = req.query;
	console.log('发送邮件');
	const user = await getUserInfoByUsername(username);
	if (!user.email) {
		res.send({
			code: 400,
			data: {},
			message: '用戶名不存在'
		});
		return;
	}
	console.log(user.email);

	var token = jwt.encode(user.uid, secret);
	console.log(token);
	//发送邮件
	await sendEmail(
		username,
		user.email,
		`http://localhost:8080/reset_password/${token}`
	).catch(console.error);
	console.log('发送邮件成功');
	res.send({
		code: 200,
		data: {},
		message: '邮件已经发送，请到邮箱里点击链接重置密码！'
	});
});

//重置密码
app.post('/reset_password', async function(req, res) {
	let { username, password } = req.body;
	// uid = jwt.decode(uid, secret);
	// console.log(uid)
	// console.log(password)
	password = password.replace(/%2B/g, '+');
	let decrypt = new JSEncrypt();
	decrypt.setPrivateKey(
		'MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCBlsrfdbHJOb6ZCWeukOGuVGVIyLnjNJUpQgK+HbfgN83n9Q65F3nFwhDXvNIZf+m21xkz3mlMm/UwcOPgW+MS1YDJfetMv/q0aLHJVma/lP3eiTpld7pkPIkhDmZutAUGHb+Kb3aA4j6IYh5tvQWKERgKqvULTyKT+mnGK2vr4OjtscvUtl5h1gBD+GChj0gjO3Y3lAGUU6Zowr32iZIhDda7qiN82VroQ1Z2ZbfLHDsXSwNZA43R2xhA6JTDwNDxRXkdYF//BuGlNYcqt9YCTeTNmEPUAUGG2fCRAq+XQdAuXeQ/9uMEOrShwWwK2iS9DHKsHVzQk6qXL17yHNT9AgMBAAECggEAT1IwvdU5zLUW0G/sUfMG4QFxubp75fICt21bZmmkao9d7vSWXX9cH0tpqdQ/OjKMqUlCePhTtfvkehEvut4jwRyEp1D3HVSJrbJD2LyVSgF136hZ4VAG/GH9gglhc7OnO5Yr7x3JCJzzr+F3RK6l3FwYPjdkpNZ8kN1/rzhW59syV5SSfZxhqS8j454tow6vdhjIHhsuZj/JR1yo6zp+Jgh1m/Js2tPq/3VtbhUsyWLbkUxZ0hFtlAIDhYYyu//9eHthEgelgXePXuPXTLb234PjTFs5gh17qiMozVJGuJLdOuw5SPggXkOwoM05yNyk1VcYVnA6PLh9uqy6J/vg4QKBgQDWuJh+qoFOniUH7DIob0LootQQZX8JEPu1opn308Ee3MurWImD8iB6Sgv4v1p5cggxz180uINf8CgfnKnRFY7iZE4rrHDhpepnJjc3EoFuBr4qOkKxt4+UpfpW+akingL6e2+TsE3hiWn7+anQ2CDHBtewb1zPmcEUCoXhGhwiyQKBgQCagHXXYKZkQP8ONt68d613cmnsarJ+A7WTPLsT9FdR/ue5f2XfLZieiJrz1XE3gNT0M4uGwQ1K5xGVDxAlDowICTR62bLTfcrlgDEabX7Ie6LoKHn94DuzYJp0hGIOoW/B/MUm1jGnabmRwd5fMN7kYkTHW76GOgCdtworFpzmlQKBgAKWmw/70i82bM/ZowklvjK7s7622n8rez1HRn/cR5mto67fFFlI0+dleRt4gwivvTWMgGNMThkb9f/bjZh9oAlOmDqii4HM1DSGG2hIitLetfAgX6lwwwRRs+DUhZtrODH4xvGK0IWFeIeXDNr9n/eGN5di4EWIXvF05wQ9olUxAoGAGFOnulzWdiyhvEw5b/VsE8WpFfeK2TqeSWujjTXI1flL5TJBCQ313OhndYMjC3k2jqjbDEGzZRrS8uRnR15uAAnrAHjspk5FNzOjB6U79Dc7ZFCTPL0kyU6pozUA94rFvQaeyEmrkc+cz212JQjd35n1eGpiqmHRnQOoDzbFR60CgYBYdZj0hYgVXVeSgZVWQGteLi46s/puRLgLZLjudqUZcQIq4GwBpVfSbsfuy+HjBc1GhlYpMp6ZZPzvPKasYyyFy2lgJj0AT7INuA9bnILYvqMzeCVL8RrEFrIGff64mxIMN/qE9uu+e9x2nWYdfXPfjaL6r7eOaZ59kE5UsCg/gA=='
	);
	password = decrypt.decrypt(password);
	let data = await resetPassword(username, password);
	if (data) {
		res.send({
			code: 200,
			message: '重置密码成功'
		});
	} else {
		res.send({
			code: 400,
			message: '重置密码失败'
		});
	}
});

//注册
app.post('/register', async function(req, res) {
	let { username, password, email } = req.body;
	console.log(username);
	const checkeUsername = await getUserInfoByUsername(username);
	console.log(checkeUsername);
	if (checkeUsername.username) {
		res.send({
			code: 400,
			message: '用户名已存在'
		});
	} else {
		let uid = getID(10);
		const data = await register(uid, username, password, email);
		console.log(data);
		if (data) {
			res.send({
				code: 200,
				message: '注册成功'
			});
		} else {
			res.send({
				code: 400,
				message: '注册失败'
			});
		}
	}
});

//文件上传
app.post('/upload', upload.single('file'), async function(req, res, next) {
	var file = req.file;
	console.log('文件类型：%s', file.mimetype);
	console.log('原始文件名：%s', file.originalname);
	console.log('文件大小：%s', file.size);
	console.log('文件保存路径：%s', file.path);
	console.log(file);
	let uid = getID(10);
	let createTime = new Date().getTime();
	const data = await uploadAdd(
		uid,
		`http://localhost:8888/images/${file.filename}`,
		file.originalname,
		createTime
	);
	if (data) {
		res.send({
			code: 200,
			data: file,
			message: '上传成功'
		});
	} else {
		res.send({
			code: 400,
			data: file,
			message: '上传失败'
		});
	}
});

app.get('/upload/list', async function(req, res) {
	let { page, size } = req.query;
	start = (page - 1) * size;
	const data = await getUploadList(start, size);
	console.log(data);
	let token = req.headers['token'];
	let auth = getTokenAuth(token);
	if (auth) {
		res.send({
			code: 200,
			data: data,
			message: '上传文件列表'
		});
	} else {
		deleteTokenHistory(token);
		res.send({
			code: 403,
			message: '无权限'
		});
	}
});

app.post('/add_banner', async function(req, res) {
	let { path, remarks } = req.body;
	let uid = getID(10);
	let createTime = new Date().getTime();
	const data = await addBanner(uid, path, remarks, createTime);
	console.log(data);
	let token = req.headers['token'];
	let auth = getTokenAuth(token);
	if (auth) {
		res.send({
			code: 200,
			data: data,
			message: '添加banner成功'
		});
	} else {
		deleteTokenHistory(token);
		res.send({
			code: 403,
			message: '无权限'
		});
	}
});

app.get('/banner/list', async function(req, res) {
	const data = await getBannerList();
	res.send({
		code: 200,
		data: data,
		message: 'banner列表'
	});
});

app.post('/banner/delete', async function(req, res) {
	let { uid } = req.body;
	const data = await deleteBanner(uid);
	let token = req.headers['token'];
	let auth = getTokenAuth(token);
	if (auth) {
		res.send({
			code: 200,
			data: data,
			message: '删除banner成功'
		});
	} else {
		deleteTokenHistory(token);
		res.send({
			code: 403,
			message: '无权限'
		});
	}
});

//获取加班列表数据
app.get('/getlist', async function(req, res) {
	//let { type } = req.query

	const data = await list();
	let token = req.headers['token'];
	console.log(token);

	let auth = getTokenAuth(token);
	console.log(auth);
	if (auth) {
		res.send({
			code: 200,
			data: data,
			message: '列表'
		});
	} else {
		deleteTokenHistory(token);
		res.send({
			code: 403,
			message: '无权限'
		});
	}
});
//删除列表数据
app.post('/deleteItem', async function(req, res) {
	let { applicationNumber } = req.body;
	const data = await deleteItem(applicationNumber);
	res.send({
		code: 200,
		data: data,
		message: '删除成功'
	});
});
//添加列表数据
app.post('/addItem', async function(req, res) {
	let { applicationNumber, nickname } = req.body;
	console.log(nickname);
	const data = await addItem(applicationNumber, nickname);
	console.log(applicationNumber);
	res.send({
		code: 200,
		data: data,
		message: '增加成功'
	});
});
//修改列表数据
// app.post('/updateItem', async function(req, res) {
//   let { applicationNumber, nickname } = req.body
//   const data = await
// })

//微信小程序，day2，女装、男装、童装接口
app.get('/wx/list', async function(req, res) {
	res.send({
		code: 200,
		data: wxData,
		message: '列表'
	});
});

//微信小程序，day3,通讯录接口
app.get('/wx/mail_list', async function(req, res) {
	res.send({
		code: 200,
		data: wxMailList,
		message: '列表'
	});
});

//微信小程序，day4，列表可以跳转到详情接口，使用mock创建大量的数据
app.get('/wx/day4/list/', async function(req, res) {
	let { page, limit } = req.query;
	let startIndex = (page - 1) * limit;
	let endIndex = startIndex + (limit - 0);
	console.log(page, limit);
	console.log(startIndex, endIndex);
	res.send({
		code: 200,
		data: day4ListData.detail.slice(startIndex, endIndex),
		message: '列表'
	});
});
//微信小程序，day4，详情接口
app.get('/wx/day4/detail/', async function(req, res) {
	let { id } = req.query;
	res.send({
		code: 200,
		data: day4ListData.detail[id],
		message: '详情'
	});
});

app.get('/wx/day5/food/', async function(req, res) {
	let { id } = req.query;
	res.send({
		code: 200,
		data: day5FootList,
		message: '详情'
	});
});

//

const server = app.listen(8888, function() {
	console.log('服务器启动成功，端口是8888');
});
