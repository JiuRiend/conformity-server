const Mock = require('mockjs')

const wxData = {
  "navtitle": [
    {
      "title": "女装",
      "id": 0
    },
    {
      "title": "男装",
      "id": 1
    },
    {
      "title": "童装",
      "id": 2
    }
  ],
  "navdata": [
    {
      "id": 0,
      "content": [
        {
          "title": "流行女装",
          "list": [
            {
              "image": "http://localhost:8888/clothes.png",
              "title": "连衣裙"
            },
            {
              "image": "http://localhost:8888/clothes2.png",
              "title": "短裤"
            },
            {
              "image": "http://localhost:8888/clothes3.png",
              "title": "半身裙"
            },
            {
              "image": "http://localhost:8888/clothes4.png",
              "title": "衬衫"
            }
          ]
        },
        {
          "title": "复古女装",
          "list": [
            {
              "image": "http://localhost:8888/clothes11.png",
              "title": "复古上衣"
            },
            {
              "image": "http://localhost:8888/clothes12.png",
              "title": "复古旗袍"
            },
            {
              "image": "http://localhost:8888/clothes13.png",
              "title": "复古汉服"
            }
          ]
        }
      ]
    },
    {
      "id": 1,
      "content": [
        {
          "title": "流行男装",
          "list": [
            {
              "image": "http://localhost:8888/clothes5.png",
              "title": "西服"
            },
            {
              "image": "http://localhost:8888/clothes6.png",
              "title": "衬衫"
            },
            {
              "image": "http://localhost:8888/clothes7.png",
              "title": "运动服"
            }
          ]
        },
        {
          "title": "复古男装",
          "list": [
            {
              "image": "http://localhost:8888/clothes14.png",
              "title": "复古上衣"
            },
            {
              "image": "http://localhost:8888/clothes15.png",
              "title": "复古中山装"
            },
            {
              "image": "http://localhost:8888/clothes16.png",
              "title": "复古古装"
            }
          ]
        }
      ]
    },
    {
      "id": 2,
      "content": [
        {
          "title": "流行童装",
          "list": [
            {
              "image": "http://localhost:8888/clothes8.png",
              "title": "牛仔"
            },
            {
              "image": "http://localhost:8888/clothes9.png",
              "title": "羽绒服"
            },
            {
              "image": "http://localhost:8888/clothes10.png",
              "title": "裙子"
            }
          ]
        },
        {
          "title": "复古童装",
          "list": [
            {
              "image": "http://localhost:8888/clothes17.png",
              "title": "复古短裙"
            },
            {
              "image": "http://localhost:8888/clothes18.png",
              "title": "复古长裙"
            },
            {
              "image": "http://localhost:8888/clothes19.png",
              "title": "复古清新装"
            }
          ]
        }
      ]
    }
  ]
}

//通讯录
const wxMailList = {
  "items": [
  {
    "key": "A",
    "row": [{
      "code": "brand-15",
      "img": "http://img.souche.com/files/tangeche/Fcs7NHo0cp.png",
      "name": "奥迪",
      "price": 1000
    },
    {
      "code": "brand-15",
      "img": "http://img.souche.com/files/tangeche/Fcs7NHo0cp.png",
      "name": "奥拓",
      "price": 1000
    },
    {
      "code": "brand-15",
      "img": "http://img.souche.com/files/tangeche/Fcs7NHo0cp.png",
      "name": "奥运",
      "price": 1000
    }      
  ]
  },
  {
    "key": "B",
    "row": [{
      "code": "brand-30",
      "img": "http://img.souche.com/files/tangeche/n7s5lnUKD9.png",
      "name": "别克",
      "price": 20000
    },
    {
      "code": "brand-23",
      "img": "http://img.souche.com/files/tangeche/218K7dxQWe.png",
      "name": "北京汽车",
      "price": 10000
    },
    {
      "code": "brand-534",
      "img": "http://img.souche.com/files/tangeche/hy6753ghfM.png",
      "name": "北汽绅宝",
      "price": 10000
    },
    {
      "code": "brand-26",
      "img": "http://img.souche.com/files/tangeche/2zMZPwkriv.png",
      "name": "奔腾",
      "price": 12000
    },
    {
      "code": "brand-25",
      "img": "http://img.souche.com/files/tangeche/pbKe6ALC2Z.png",
      "name": "奔驰",
      "price": 22200
    },
    {
      "code": "brand-20",
      "img": "http://img.souche.com/files/tangeche/se4CGU1icU.png",
      "name": "宝马",
      "price": 30000
    },
    {
      "code": "brand-18",
      "img": "http://img.souche.com/files/tangeche/QU4w7CeF31.png",
      "name": "宝骏",
      "price": 10000
    },
    {
      "code": "brand-27",
      "img": "http://img.souche.com/files/tangeche/4NMdX1NErQ.png",
      "name": "本田",
      "price": 12000
    },
    {
      "code": "brand-29",
      "img": "http://img.souche.com/files/tangeche/Ay8uVvsuPA.png",
      "name": "标致",
      "price": 22200
    },
    {
      "code": "brand-28",
      "img": "http://img.souche.com/files/tangeche/GCKgPNizjk.png",
      "name": "比亚迪",
      "price": 30000
    }]
  },
  {
    "key": "C",
    "row": [{
      "code": "brand-164",
      "img": "http://img.souche.com/files/tangeche/k7gZIDTHVE.png",
      "name": "长安",
      "price": 10000
    },
    {
      "code": "brand-526",
      "img": "http://img.souche.com/files/tangeche/30A7wRIyKv.png",
      "name": "长安欧尚",
      "price": 140000
    }]
  },
  {
    "key": "D",
    "row": [{
      "code": "brand-522",
      "img": "http://img.souche.com/files/tangeche/ePAxQRnjt7.png",
      "name": "东风风神",
      "price": 10000
    },
    {
      "code": "brand-574",
      "img": "http://img.souche.com/files/tangeche/V1uYw3dt9C.png",
      "name": "东风风行",
      "price": 10000
    },
    {
      "code": "brand-41",
      "img": "http://img.souche.com/files/tangeche/lMQ7DAjvSF.png",
      "name": "大众",
      "price": 10000
    }]
  },
  {
    "key": "F",
    "row": [{
      "code": "brand-49",
      "img": "http://img.souche.com/files/tangeche/GGKgBIoaRg.png",
      "name": "丰田",
      "price": 1000
    },
    {
      "code": "brand-53",
      "img": "http://img.souche.com/files/tangeche/4V8qf0BDNQ.png",
      "name": "福特",
      "price": 1000
    }]
  },
  {
    "key": "G",
    "row": [{
      "code": "brand-56",
      "img": "http://img.souche.com/files/tangeche/OU80kTufNy.png",
      "name": "广汽传祺",
      "price": 1000
    },
    {
      "code": "brand-1001-n",
      "img": "http://img.souche.com/files/tangeche/t0gp270C0s.png",
      "name": "观致",
      "price": 1000
    }]
  },
  {
    "key": "H",
    "row": [{
      "code": "brand-530",
      "img": "http://img.souche.com/files/tangeche/tzamqNcFUt.png",
      "name": "哈弗",
      "price": 1000
    }]
  },
  {
    "key": "J",
    "row": [{
      "code": "brand-74",
      "img": "http://img.souche.com/files/tangeche/64cNLCWnCO.png",
      "name": "Jeep",
      "price": 1000
    },
    {
      "code": "brand-72",
      "img": "http://img.souche.com/files/tangeche/YW8wMAytMG.png",
      "name": "吉利汽车",
      "price": 1000
    },
    {
      "code": "brand-75",
      "img": "http://img.souche.com/files/tangeche/2rKQFQ2po7.png",
      "name": "江淮",
      "price": 1000
    }]
  },
  {
    "key": "L",
    "row": [{
      "code": "brand-99",
      "img": "http://img.souche.com/files/tangeche/xsuUgp34wn.png",
      "name": "路虎",
      "price": 1000
    },
    {
      "code": "brand-93",
      "img": "http://img.souche.com/files/tangeche/CJMNrz043K.png",
      "name": "雷诺",
      "price": 1000
    }]
  },
  {
    "key": "M",
    "row": [{
      "code": "brand-109",
      "img": "http://img.souche.com/files/tangeche/tzg5K4SeOJ.png",
      "name": "MG",
      "price": 1000
    },
    {
      "code": "brand-108",
      "img": "http://img.souche.com/files/tangeche/zJ4knqOAyC.png",
      "name": "MINI",
      "price": 1000
    },
    {
      "code": "brand-102",
      "img": "http://img.souche.com/files/tangeche/4JqqMuZF2X.png",
      "name": "马自达",
      "price": 1000
    }]
  },
  {
    "key": "Q",
    "row": [{
      "code": "brand-520",
      "img": "http://img.souche.com/files/tangeche/Vc6JLqvC3u.png",
      "name": "启辰",
      "price": 1000
    },
    {
      "code": "brand-119",
      "img": "http://img.souche.com/files/tangeche/lowjHQ8BOs.png",
      "name": "起亚",
      "price": 1000
    }]
  },
  {
    "key": "R",
    "row": [{
      "code": "brand-121",
      "img": "http://img.souche.com/files/tangeche/oXqQfOLA7x.png",
      "name": "日产",
      "price": 1000
    },
    {
      "code": "brand-122",
      "img": "http://img.souche.com/files/tangeche/r9QL1ahNVo.png",
      "name": "荣威",
      "price": 1000
    }]
  },
  {
    "key": "S",
    "row": [{
      "code": "brand-126",
      "img": "http://img.souche.com/files/tangeche/EUgnLFf9ea.png",
      "name": "三菱",
      "price": 10000
    },
    {
      "code": "brand-135",
      "img": "http://img.souche.com/files/tangeche/68c1L866lY.png",
      "name": "斯柯达",
      "price": 103000
    }]
  },
  {
    "key": "T",
    "row": [{
      "code": "brand-510",
      "img": "http://img.souche.com/files/tangeche/ReueJYkAG5.png",
      "name": "特斯拉",
      "price": 1000
    }]
  },
  {
    "key": "W",
    "row": [{
      "code": "brand-148",
      "img": "http://img.souche.com/files/tangeche/4zAjvdII58.png",
      "name": "五菱汽车",
      "price": 1000
    }]
  },
  {
    "key": "X",
    "row": [{
      "code": "brand-151",
      "img": "http://img.souche.com/files/tangeche/7VOQCwvHJ1.png",
      "name": "现代",
      "price": 1000
    },
    {
      "code": "brand-154",
      "img": "http://img.souche.com/files/tangeche/TD8si8cV40.png",
      "name": "雪佛兰",
      "price": 1000
    },
    {
      "code": "brand-155",
      "img": "http://img.souche.com/files/tangeche/h8u6r3RUOn.png",
      "name": "雪铁龙",
      "price": 1000
    }]
  },
  {
    "key": "Y",
    "row": [{
      "code": "brand-158",
      "img": "http://img.souche.com/files/tangeche/5Rs7xXYDij.png",
      "name": "英菲尼迪",
      "price": 1000
    }]
  },
  {
    "key": "Z",
    "row": [{
      "code": "brand-172",
      "img": "http://img.souche.com/files/tangeche/tReQknwhfV.png",
      "name": "众泰",
      "price": 1000
    }]
  }]
}

const day5FootList = {
  "shopName": "西少爷肉夹馍（西二旗店）",
  "shopPic": "http://p0.meituan.net/waimaipoi/6bf980cd5d696a2b67e9348e0eb6eb5d35237.jpg",
  "deliveryFee": 7.0,
  "deliveryType": 0,
  "deliveryTime": 30,
  "categoryList": [
      {
          "tag": "100",
          "activityTag": "",
          "iconUrl": "http://p1.meituan.net/aichequan/87f966955f693102d67daf2ec44b58411361.png",
          "categoryName": "热销",
          "categoryType": 1,
          "spuList": [
              {
                  "spuName": "经典腊汁肉夹馍",
                  "unit": "份",
                  "spuId": 188340789,
                  "tag": "26676263",
                  "activityTag": "",
                  "littleImageUrl": "http://p1.meituan.net/xianfu/3a01d174dd0f8e09035ebd12c1b9e912266444.png",
                  "bigImageUrl": "http://p1.meituan.net/xianfu/3a01d174dd0f8e09035ebd12c1b9e912266444.png",
                  "saleVolume": 15823,
                  "originPrice": 14.5,
                  "currentPrice": 14.5,
                  "spuDesc": "纯肉，炖煮。鲜猪肉，选取臀尖、五花部位，肉与汁的黄金比例；加入32味天然香辛料。",
                  "praiseNum": 28,
                  "sellStatus": 0,
                  "activityType": 0,
                  "skuList": [
                      {
                          "skuId": 203123837,
                          "spec": "(份)",
                          "soldStatus": 0,
                          "realStock": -1,
                          "activityStock": 0,
                          "minPurchaseNum": -1,
                          "restrict": -1,
                          "originPrice": 14.5,
                          "currentPrice": 14.5,
                          "boxFee": 1.0,
                          "skuPromotionInfo": "",
                          "count": 0
                      }
                  ],
                  "spuAttrList": [],
                  "spuPromotionInfo": "",
                  "activityPolicy": {
                      "discountByCount": {
                          "count": 0,
                          "discount": 1.0
                      }
                  },
                  "statusDesc": "",
                  "productLabelPictureList": [
                      {
                          "pictureUrl": "http://p0.meituan.net/aichequan/e4384905366c1a4d3a3d8c7831c79f7c1346.png",
                          "width": "60",
                          "height": "30"
                      },
                      {
                          "pictureUrl": "http://p1.meituan.net/aichequan/c9bcb26d2e342c7bffd0267ae3f129c03286.png",
                          "width": "120",
                          "height": "30"
                      }
                  ]
              },
              {
                  "spuName": "鸡骨浓汤酸辣粉",
                  "unit": "份",
                  "spuId": 188342582,
                  "tag": "26676265",
                  "activityTag": "",
                  "littleImageUrl": "http://p0.meituan.net/xianfu/5c98777fff2718063d07eb427e886e5a224202.png",
                  "bigImageUrl": "http://p0.meituan.net/xianfu/5c98777fff2718063d07eb427e886e5a224202.png",
                  "saleVolume": 7415,
                  "originPrice": 17.0,
                  "currentPrice": 17.0,
                  "spuDesc": "含肉，现煮即食。红薯粉，经过筛粉，和面，漏粉，干燥等9个环节，制作而成的螺纹曲粉，配剔骨鸡肉，干黄豆，老坛酸菜，榨菜丁，香菜碎。加入鸡汤调味料，特制卤汁，醋，辣子油。",
                  "praiseNum": 21,
                  "sellStatus": 0,
                  "activityType": 0,
                  "skuList": [
                      {
                          "skuId": 203123846,
                          "spec": "(份)",
                          "soldStatus": 0,
                          "realStock": -1,
                          "activityStock": 0,
                          "minPurchaseNum": -1,
                          "restrict": -1,
                          "originPrice": 17.0,
                          "currentPrice": 17.0,
                          "boxFee": 1.0,
                          "skuPromotionInfo": "",
                          "count": 0
                      }
                  ],
                  "spuAttrList": [],
                  "spuPromotionInfo": "",
                  "activityPolicy": {
                      "discountByCount": {
                          "count": 0,
                          "discount": 1.0
                      }
                  },
                  "statusDesc": "",
                  "productLabelPictureList": [
                      {
                          "pictureUrl": "http://p0.meituan.net/aichequan/e4384905366c1a4d3a3d8c7831c79f7c1346.png",
                          "width": "60",
                          "height": "30"
                      },
                      {
                          "pictureUrl": "http://p1.meituan.net/aichequan/c9bcb26d2e342c7bffd0267ae3f129c03286.png",
                          "width": "120",
                          "height": "30"
                      }
                  ]
              },
              {
                  "spuName": "健康蔬菜夹馍",
                  "unit": "份",
                  "spuId": 193853752,
                  "tag": "26676263",
                  "activityTag": "",
                  "littleImageUrl": "http://p1.meituan.net/xianfu/7b0dd22fb2b8a744e4bf02b8c8fef1ac270157.png",
                  "bigImageUrl": "http://p1.meituan.net/xianfu/7b0dd22fb2b8a744e4bf02b8c8fef1ac270157.png",
                  "saleVolume": 4576,
                  "originPrice": 10.0,
                  "currentPrice": 10.0,
                  "spuDesc": "选取土豆、海带、青椒、胡萝卜、紫甘蓝。加入陕西原产压榨菜籽油、花椒油。",
                  "praiseNum": 9,
                  "sellStatus": 0,
                  "activityType": 0,
                  "skuList": [
                      {
                          "skuId": 209293646,
                          "spec": "(份)",
                          "soldStatus": 0,
                          "realStock": -1,
                          "activityStock": 0,
                          "minPurchaseNum": -1,
                          "restrict": -1,
                          "originPrice": 10.0,
                          "currentPrice": 10.0,
                          "boxFee": 1.0,
                          "skuPromotionInfo": "",
                          "count": 0
                      }
                  ],
                  "spuAttrList": [],
                  "spuPromotionInfo": "",
                  "activityPolicy": {
                      "discountByCount": {
                          "count": 0,
                          "discount": 1.0
                      }
                  },
                  "statusDesc": "",
                  "productLabelPictureList": [
                      {
                          "pictureUrl": "http://p0.meituan.net/aichequan/e4384905366c1a4d3a3d8c7831c79f7c1346.png",
                          "width": "60",
                          "height": "30"
                      }
                  ]
              },
              {
                  "spuName": "油泼辣子凉皮",
                  "unit": "份",
                  "spuId": 417938010,
                  "tag": "26676265",
                  "activityTag": "",
                  "littleImageUrl": "http://p1.meituan.net/xianfu/a29a98b01fc118c6c3f399588543165496791.jpg",
                  "bigImageUrl": "http://p1.meituan.net/xianfu/a29a98b01fc118c6c3f399588543165496791.jpg",
                  "saleVolume": 4149,
                  "originPrice": 16.0,
                  "currentPrice": 16.0,
                  "spuDesc": "凉拌即食。五得利小麦粉制作高筋度凉皮，配水煮面筋、黄瓜丝。加入岐山原产醋，宝鸡原产辣椒。通过传统工艺还原面皮纯粹自然的劲道柔韧。",
                  "praiseNum": 6,
                  "sellStatus": 0,
                  "activityType": 0,
                  "skuList": [
                      {
                          "skuId": 456636921,
                          "spec": "(份)",
                          "soldStatus": 0,
                          "realStock": -1,
                          "activityStock": 0,
                          "minPurchaseNum": -1,
                          "restrict": -1,
                          "originPrice": 16.0,
                          "currentPrice": 16.0,
                          "boxFee": 1.0,
                          "skuPromotionInfo": "",
                          "count": 0
                      }
                  ],
                  "spuAttrList": [],
                  "spuPromotionInfo": "",
                  "activityPolicy": {
                      "discountByCount": {
                          "count": 0,
                          "discount": 1.0
                      }
                  },
                  "statusDesc": "",
                  "productLabelPictureList": [
                      {
                          "pictureUrl": "http://p1.meituan.net/aichequan/c9bcb26d2e342c7bffd0267ae3f129c03286.png",
                          "width": "120",
                          "height": "30"
                      }
                  ]
              },
              {
                  "spuName": "长安醇豆浆",
                  "unit": "份",
                  "spuId": 220389283,
                  "tag": "26676266",
                  "activityTag": "",
                  "littleImageUrl": "http://p1.meituan.net/xianfu/23f0ba692aa36ac74da2cb7e8bb468e372447.jpg",
                  "bigImageUrl": "http://p1.meituan.net/xianfu/23f0ba692aa36ac74da2cb7e8bb468e372447.jpg",
                  "saleVolume": 3161,
                  "originPrice": 9.0,
                  "currentPrice": 9.0,
                  "spuDesc": "热饮。非转基因大豆，高科技专利技术去除豆腥味。",
                  "praiseNum": 5,
                  "sellStatus": 0,
                  "activityType": 0,
                  "skuList": [
                      {
                          "skuId": 239398411,
                          "spec": "(份)",
                          "soldStatus": 0,
                          "realStock": -1,
                          "activityStock": 0,
                          "minPurchaseNum": -1,
                          "restrict": -1,
                          "originPrice": 9.0,
                          "currentPrice": 9.0,
                          "boxFee": 0.0,
                          "skuPromotionInfo": "",
                          "count": 0
                      }
                  ],
                  "spuAttrList": [],
                  "spuPromotionInfo": "",
                  "activityPolicy": {
                      "discountByCount": {
                          "count": 0,
                          "discount": 1.0
                      }
                  },
                  "statusDesc": ""
              },
              {
                  "spuName": "芝麻酱拌凉皮",
                  "unit": "份",
                  "spuId": 1007313464,
                  "tag": "26676265",
                  "activityTag": "",
                  "littleImageUrl": "http://p0.meituan.net/xianfu/2db4620e0b26fa030faf958cdb6a7b90153186.png",
                  "bigImageUrl": "http://p0.meituan.net/xianfu/2db4620e0b26fa030faf958cdb6a7b90153186.png",
                  "saleVolume": 2860,
                  "originPrice": 18.0,
                  "currentPrice": 18.0,
                  "spuDesc": "凉拌即食。五得利小麦粉制作的高筋度凉皮，配水煮面筋、黄瓜丝。加入醇香麻酱、秘制辣椒油，爽口细滑。",
                  "praiseNum": 12,
                  "sellStatus": 0,
                  "activityType": 0,
                  "skuList": [
                      {
                          "skuId": 1108031344,
                          "spec": "(份)",
                          "soldStatus": 0,
                          "realStock": -1,
                          "activityStock": 0,
                          "minPurchaseNum": -1,
                          "restrict": -1,
                          "originPrice": 18.0,
                          "currentPrice": 18.0,
                          "boxFee": 1.0,
                          "skuPromotionInfo": "",
                          "count": 0
                      }
                  ],
                  "spuAttrList": [],
                  "spuPromotionInfo": "",
                  "activityPolicy": {
                      "discountByCount": {
                          "count": 0,
                          "discount": 1.0
                      }
                  },
                  "statusDesc": ""
              },
              {
                  "spuName": "西食堂小豆花",
                  "unit": "份",
                  "spuId": 188339251,
                  "tag": "26676265",
                  "activityTag": "",
                  "littleImageUrl": "http://p1.meituan.net/xianfu/6f4b546008a13e38bf8fdb1baf0d9231182559.png",
                  "bigImageUrl": "http://p1.meituan.net/xianfu/6f4b546008a13e38bf8fdb1baf0d9231182559.png",
                  "saleVolume": 2660,
                  "originPrice": 14.0,
                  "currentPrice": 14.0,
                  "spuDesc": "温热即食。非转基因大豆，豆浆点成口感嫩滑的豆花。配花生碎、榨菜丁、五香黄豆、香菜碎。加入特调卤汁、醋、辣子油。",
                  "praiseNum": 7,
                  "sellStatus": 0,
                  "activityType": 0,
                  "skuList": [
                      {
                          "skuId": 203121160,
                          "spec": "(份)",
                          "soldStatus": 0,
                          "realStock": -1,
                          "activityStock": 0,
                          "minPurchaseNum": -1,
                          "restrict": -1,
                          "originPrice": 14.0,
                          "currentPrice": 14.0,
                          "boxFee": 1.0,
                          "skuPromotionInfo": "",
                          "count": 0
                      }
                  ],
                  "spuAttrList": [],
                  "spuPromotionInfo": "",
                  "activityPolicy": {
                      "discountByCount": {
                          "count": 0,
                          "discount": 1.0
                      }
                  },
                  "statusDesc": "",
                  "productLabelPictureList": [
                      {
                          "pictureUrl": "http://p1.meituan.net/aichequan/c9bcb26d2e342c7bffd0267ae3f129c03286.png",
                          "width": "120",
                          "height": "30"
                      }
                  ]
              },
              {
                  "spuName": "鲜汤手工小馄饨",
                  "unit": "份",
                  "spuId": 844814019,
                  "tag": "26676265",
                  "activityTag": "",
                  "littleImageUrl": "http://p0.meituan.net/xianfu/4d8cfdd7599c7b1916b42262d99fee84155849.png",
                  "bigImageUrl": "http://p0.meituan.net/xianfu/4d8cfdd7599c7b1916b42262d99fee84155849.png",
                  "saleVolume": 2608,
                  "originPrice": 16.0,
                  "currentPrice": 16.0,
                  "spuDesc": "高汤煮沸。加入鸡蛋丝，虾皮，枸杞，配少许黑芝麻、天然香辛料调味。",
                  "praiseNum": 9,
                  "sellStatus": 0,
                  "activityType": 0,
                  "skuList": [
                      {
                          "skuId": 916898610,
                          "spec": "(份)",
                          "soldStatus": 0,
                          "realStock": -1,
                          "activityStock": 0,
                          "minPurchaseNum": -1,
                          "restrict": -1,
                          "originPrice": 16.0,
                          "currentPrice": 16.0,
                          "boxFee": 1.0,
                          "skuPromotionInfo": "",
                          "count": 0
                      }
                  ],
                  "spuAttrList": [],
                  "spuPromotionInfo": "",
                  "activityPolicy": {
                      "discountByCount": {
                          "count": 0,
                          "discount": 1.0
                      }
                  },
                  "statusDesc": ""
              },
              {
                  "spuName": "孜然肉夹馍",
                  "unit": "份",
                  "spuId": 1333924729,
                  "tag": "26676263",
                  "activityTag": "",
                  "littleImageUrl": "http://p1.meituan.net/xianfu/35fb2bfb472be03227bae038b55f252a265852.png",
                  "bigImageUrl": "http://p1.meituan.net/xianfu/35fb2bfb472be03227bae038b55f252a265852.png",
                  "saleVolume": 1915,
                  "originPrice": 13.0,
                  "currentPrice": 13.0,
                  "spuDesc": "爆炒。猪肉里脊、洋葱、青椒、胡萝卜；加入新疆大颗粒孜然。",
                  "praiseNum": 8,
                  "sellStatus": 0,
                  "activityType": 0,
                  "skuList": [
                      {
                          "skuId": 1500367058,
                          "spec": "(份)",
                          "soldStatus": 0,
                          "realStock": 890,
                          "activityStock": 0,
                          "minPurchaseNum": -1,
                          "restrict": -1,
                          "originPrice": 13.0,
                          "currentPrice": 13.0,
                          "boxFee": 1.0,
                          "skuPromotionInfo": "",
                          "count": 0
                      }
                  ],
                  "spuAttrList": [],
                  "spuPromotionInfo": "",
                  "activityPolicy": {
                      "discountByCount": {
                          "count": 0,
                          "discount": 1.0
                      }
                  },
                  "statusDesc": "",
                  "productLabelPictureList": [
                      {
                          "pictureUrl": "http://p1.meituan.net/aichequan/c9bcb26d2e342c7bffd0267ae3f129c03286.png",
                          "width": "120",
                          "height": "30"
                      }
                  ]
              },
              {
                  "spuName": "精选组合HOT",
                  "unit": "份",
                  "spuId": 1485418494,
                  "tag": "83160233",
                  "activityTag": "",
                  "littleImageUrl": "http://p1.meituan.net/xianfu/f77d77257e1d9938af8943c4f85e0d1c137135.jpg",
                  "bigImageUrl": "http://p1.meituan.net/xianfu/f77d77257e1d9938af8943c4f85e0d1c137135.jpg",
                  "saleVolume": 1706,
                  "originPrice": 28.5,
                  "currentPrice": 28.5,
                  "spuDesc": "经典腊汁肉夹馍+鲜汤手工小馄饨",
                  "praiseNum": 3,
                  "sellStatus": 0,
                  "activityType": 0,
                  "skuList": [
                      {
                          "skuId": 1694244557,
                          "spec": "份(份)",
                          "soldStatus": 0,
                          "realStock": -1,
                          "activityStock": 0,
                          "minPurchaseNum": -1,
                          "restrict": -1,
                          "originPrice": 28.5,
                          "currentPrice": 28.5,
                          "boxFee": 4.0,
                          "skuPromotionInfo": "",
                          "count": 0
                      }
                  ],
                  "spuAttrList": [],
                  "spuPromotionInfo": "",
                  "activityPolicy": {
                      "discountByCount": {
                          "count": 0,
                          "discount": 1.0
                      }
                  },
                  "statusDesc": ""
              }
          ],
          "end": true,
          "nextPageIndex": 0
      },
      {
          "tag": "83160233",
          "activityTag": "",
          "iconUrl": "",
          "categoryName": "热销套餐",
          "categoryType": 0,
          "spuList": [
              {
                  "spuName": "人气组合HOT",
                  "unit": "份",
                  "spuId": 1485355010,
                  "tag": "83160233",
                  "activityTag": "",
                  "littleImageUrl": "http://p0.meituan.net/xianfu/b524cae61064022f1ee53dd7b878eb39139990.jpg",
                  "bigImageUrl": "http://p0.meituan.net/xianfu/b524cae61064022f1ee53dd7b878eb39139990.jpg",
                  "saleVolume": 966,
                  "originPrice": 41.5,
                  "currentPrice": 41.5,
                  "spuDesc": "经典腊汁肉夹馍+鸡骨浓汤酸辣粉+古法熬制酸梅汤",
                  "praiseNum": 2,
                  "sellStatus": 0,
                  "activityType": 0,
                  "skuList": [
                      {
                          "skuId": 1694244559,
                          "spec": "份(份)",
                          "soldStatus": 0,
                          "realStock": -1,
                          "activityStock": 0,
                          "minPurchaseNum": -1,
                          "restrict": -1,
                          "originPrice": 41.5,
                          "currentPrice": 41.5,
                          "boxFee": 4.0,
                          "skuPromotionInfo": "",
                          "count": 0
                      }
                  ],
                  "spuAttrList": [],
                  "spuPromotionInfo": "",
                  "activityPolicy": {
                      "discountByCount": {
                          "count": 0,
                          "discount": 1.0
                      }
                  },
                  "statusDesc": ""
              },
              {
                  "spuName": "精选组合HOT",
                  "unit": "份",
                  "spuId": 1485418494,
                  "tag": "83160233",
                  "activityTag": "",
                  "littleImageUrl": "http://p1.meituan.net/xianfu/f77d77257e1d9938af8943c4f85e0d1c137135.jpg",
                  "bigImageUrl": "http://p1.meituan.net/xianfu/f77d77257e1d9938af8943c4f85e0d1c137135.jpg",
                  "saleVolume": 1706,
                  "originPrice": 28.5,
                  "currentPrice": 28.5,
                  "spuDesc": "经典腊汁肉夹馍+鲜汤手工小馄饨",
                  "praiseNum": 3,
                  "sellStatus": 0,
                  "activityType": 0,
                  "skuList": [
                      {
                          "skuId": 1694244557,
                          "spec": "份(份)",
                          "soldStatus": 0,
                          "realStock": -1,
                          "activityStock": 0,
                          "minPurchaseNum": -1,
                          "restrict": -1,
                          "originPrice": 28.5,
                          "currentPrice": 28.5,
                          "boxFee": 4.0,
                          "skuPromotionInfo": "",
                          "count": 0
                      }
                  ],
                  "spuAttrList": [],
                  "spuPromotionInfo": "",
                  "activityPolicy": {
                      "discountByCount": {
                          "count": 0,
                          "discount": 1.0
                      }
                  },
                  "statusDesc": ""
              },
              {
                  "spuName": "经典组合HOT",
                  "unit": "份",
                  "spuId": 1485563355,
                  "tag": "83160233",
                  "activityTag": "",
                  "littleImageUrl": "http://p0.meituan.net/xianfu/a0f5032bbb98bcd29dc7b99eda28cf8c168617.jpg",
                  "bigImageUrl": "http://p0.meituan.net/xianfu/a0f5032bbb98bcd29dc7b99eda28cf8c168617.jpg",
                  "saleVolume": 478,
                  "originPrice": 40.5,
                  "currentPrice": 40.5,
                  "spuDesc": "经典腊汁肉夹馍+油泼辣子凉皮+古法熬制酸梅汤",
                  "praiseNum": 0,
                  "sellStatus": 0,
                  "activityType": 0,
                  "skuList": [
                      {
                          "skuId": 1694368506,
                          "spec": "份(份)",
                          "soldStatus": 0,
                          "realStock": -1,
                          "activityStock": 0,
                          "minPurchaseNum": -1,
                          "restrict": -1,
                          "originPrice": 40.5,
                          "currentPrice": 40.5,
                          "boxFee": 4.0,
                          "skuPromotionInfo": "",
                          "count": 0
                      }
                  ],
                  "spuAttrList": [],
                  "spuPromotionInfo": "",
                  "activityPolicy": {
                      "discountByCount": {
                          "count": 0,
                          "discount": 1.0
                      }
                  },
                  "statusDesc": ""
              }
          ],
          "end": true,
          "nextPageIndex": 0
      },
      {
          "tag": "26676263",
          "activityTag": "",
          "iconUrl": "",
          "categoryName": "招牌原味馍",
          "categoryType": 0,
          "spuList": [
              {
                  "spuName": "经典腊汁肉夹馍",
                  "unit": "份",
                  "spuId": 188340789,
                  "tag": "26676263",
                  "activityTag": "",
                  "littleImageUrl": "http://p1.meituan.net/xianfu/3a01d174dd0f8e09035ebd12c1b9e912266444.png",
                  "bigImageUrl": "http://p1.meituan.net/xianfu/3a01d174dd0f8e09035ebd12c1b9e912266444.png",
                  "saleVolume": 15823,
                  "originPrice": 14.5,
                  "currentPrice": 14.5,
                  "spuDesc": "纯肉，炖煮。鲜猪肉，选取臀尖、五花部位，肉与汁的黄金比例；加入32味天然香辛料。",
                  "praiseNum": 28,
                  "sellStatus": 0,
                  "activityType": 0,
                  "skuList": [
                      {
                          "skuId": 203123837,
                          "spec": "(份)",
                          "soldStatus": 0,
                          "realStock": -1,
                          "activityStock": 0,
                          "minPurchaseNum": -1,
                          "restrict": -1,
                          "originPrice": 14.5,
                          "currentPrice": 14.5,
                          "boxFee": 1.0,
                          "skuPromotionInfo": "",
                          "count": 0
                      }
                  ],
                  "spuAttrList": [],
                  "spuPromotionInfo": "",
                  "activityPolicy": {
                      "discountByCount": {
                          "count": 0,
                          "discount": 1.0
                      }
                  },
                  "statusDesc": "",
                  "productLabelPictureList": [
                      {
                          "pictureUrl": "http://p0.meituan.net/aichequan/e4384905366c1a4d3a3d8c7831c79f7c1346.png",
                          "width": "60",
                          "height": "30"
                      },
                      {
                          "pictureUrl": "http://p1.meituan.net/aichequan/c9bcb26d2e342c7bffd0267ae3f129c03286.png",
                          "width": "120",
                          "height": "30"
                      }
                  ]
              },
              {
                  "spuName": "健康蔬菜夹馍",
                  "unit": "份",
                  "spuId": 193853752,
                  "tag": "26676263",
                  "activityTag": "",
                  "littleImageUrl": "http://p1.meituan.net/xianfu/7b0dd22fb2b8a744e4bf02b8c8fef1ac270157.png",
                  "bigImageUrl": "http://p1.meituan.net/xianfu/7b0dd22fb2b8a744e4bf02b8c8fef1ac270157.png",
                  "saleVolume": 4576,
                  "originPrice": 10.0,
                  "currentPrice": 10.0,
                  "spuDesc": "选取土豆、海带、青椒、胡萝卜、紫甘蓝。加入陕西原产压榨菜籽油、花椒油。",
                  "praiseNum": 9,
                  "sellStatus": 0,
                  "activityType": 0,
                  "skuList": [
                      {
                          "skuId": 209293646,
                          "spec": "(份)",
                          "soldStatus": 0,
                          "realStock": -1,
                          "activityStock": 0,
                          "minPurchaseNum": -1,
                          "restrict": -1,
                          "originPrice": 10.0,
                          "currentPrice": 10.0,
                          "boxFee": 1.0,
                          "skuPromotionInfo": "",
                          "count": 0
                      }
                  ],
                  "spuAttrList": [],
                  "spuPromotionInfo": "",
                  "activityPolicy": {
                      "discountByCount": {
                          "count": 0,
                          "discount": 1.0
                      }
                  },
                  "statusDesc": "",
                  "productLabelPictureList": [
                      {
                          "pictureUrl": "http://p0.meituan.net/aichequan/e4384905366c1a4d3a3d8c7831c79f7c1346.png",
                          "width": "60",
                          "height": "30"
                      }
                  ]
              },
              {
                  "spuName": "孜然肉夹馍",
                  "unit": "份",
                  "spuId": 1333924729,
                  "tag": "26676263",
                  "activityTag": "",
                  "littleImageUrl": "http://p1.meituan.net/xianfu/35fb2bfb472be03227bae038b55f252a265852.png",
                  "bigImageUrl": "http://p1.meituan.net/xianfu/35fb2bfb472be03227bae038b55f252a265852.png",
                  "saleVolume": 1915,
                  "originPrice": 13.0,
                  "currentPrice": 13.0,
                  "spuDesc": "爆炒。猪肉里脊、洋葱、青椒、胡萝卜；加入新疆大颗粒孜然。",
                  "praiseNum": 8,
                  "sellStatus": 0,
                  "activityType": 0,
                  "skuList": [
                      {
                          "skuId": 1500367058,
                          "spec": "(份)",
                          "soldStatus": 0,
                          "realStock": 890,
                          "activityStock": 0,
                          "minPurchaseNum": -1,
                          "restrict": -1,
                          "originPrice": 13.0,
                          "currentPrice": 13.0,
                          "boxFee": 1.0,
                          "skuPromotionInfo": "",
                          "count": 0
                      }
                  ],
                  "spuAttrList": [],
                  "spuPromotionInfo": "",
                  "activityPolicy": {
                      "discountByCount": {
                          "count": 0,
                          "discount": 1.0
                      }
                  },
                  "statusDesc": "",
                  "productLabelPictureList": [
                      {
                          "pictureUrl": "http://p1.meituan.net/aichequan/c9bcb26d2e342c7bffd0267ae3f129c03286.png",
                          "width": "120",
                          "height": "30"
                      }
                  ]
              },
              {
                  "spuName": "罗卜干鸡肉夹馍",
                  "unit": "份",
                  "spuId": 1524998780,
                  "tag": "26676263",
                  "activityTag": "",
                  "littleImageUrl": "http://p1.meituan.net/xianfu/9a8287d82170c8571782c116f8a52bb9171843.jpg",
                  "bigImageUrl": "http://p1.meituan.net/xianfu/9a8287d82170c8571782c116f8a52bb9171843.jpg",
                  "saleVolume": 814,
                  "originPrice": 15.5,
                  "currentPrice": 15.5,
                  "spuDesc": "",
                  "praiseNum": 1,
                  "sellStatus": 0,
                  "activityType": 0,
                  "skuList": [
                      {
                          "skuId": 1738546777,
                          "spec": "份(份)",
                          "soldStatus": 0,
                          "realStock": 9937,
                          "activityStock": 0,
                          "minPurchaseNum": -1,
                          "restrict": -1,
                          "originPrice": 15.5,
                          "currentPrice": 15.5,
                          "boxFee": 1.0,
                          "skuPromotionInfo": "",
                          "count": 0
                      }
                  ],
                  "spuAttrList": [],
                  "spuPromotionInfo": "",
                  "activityPolicy": {
                      "discountByCount": {
                          "count": 0,
                          "discount": 1.0
                      }
                  },
                  "statusDesc": ""
              }
          ],
          "end": true,
          "nextPageIndex": 0
      },
      {
          "tag": "26676265",
          "activityTag": "",
          "iconUrl": "",
          "categoryName": "经典搭配",
          "categoryType": 0,
          "spuList": [
              {
                  "spuName": "鸡骨浓汤酸辣粉",
                  "unit": "份",
                  "spuId": 188342582,
                  "tag": "26676265",
                  "activityTag": "",
                  "littleImageUrl": "http://p0.meituan.net/xianfu/5c98777fff2718063d07eb427e886e5a224202.png",
                  "bigImageUrl": "http://p0.meituan.net/xianfu/5c98777fff2718063d07eb427e886e5a224202.png",
                  "saleVolume": 7415,
                  "originPrice": 17.0,
                  "currentPrice": 17.0,
                  "spuDesc": "含肉，现煮即食。红薯粉，经过筛粉，和面，漏粉，干燥等9个环节，制作而成的螺纹曲粉，配剔骨鸡肉，干黄豆，老坛酸菜，榨菜丁，香菜碎。加入鸡汤调味料，特制卤汁，醋，辣子油。",
                  "praiseNum": 21,
                  "sellStatus": 0,
                  "activityType": 0,
                  "skuList": [
                      {
                          "skuId": 203123846,
                          "spec": "(份)",
                          "soldStatus": 0,
                          "realStock": -1,
                          "activityStock": 0,
                          "minPurchaseNum": -1,
                          "restrict": -1,
                          "originPrice": 17.0,
                          "currentPrice": 17.0,
                          "boxFee": 1.0,
                          "skuPromotionInfo": "",
                          "count": 0
                      }
                  ],
                  "spuAttrList": [],
                  "spuPromotionInfo": "",
                  "activityPolicy": {
                      "discountByCount": {
                          "count": 0,
                          "discount": 1.0
                      }
                  },
                  "statusDesc": "",
                  "productLabelPictureList": [
                      {
                          "pictureUrl": "http://p0.meituan.net/aichequan/e4384905366c1a4d3a3d8c7831c79f7c1346.png",
                          "width": "60",
                          "height": "30"
                      },
                      {
                          "pictureUrl": "http://p1.meituan.net/aichequan/c9bcb26d2e342c7bffd0267ae3f129c03286.png",
                          "width": "120",
                          "height": "30"
                      }
                  ]
              },
              {
                  "spuName": "鲜汤手工小馄饨",
                  "unit": "份",
                  "spuId": 844814019,
                  "tag": "26676265",
                  "activityTag": "",
                  "littleImageUrl": "http://p0.meituan.net/xianfu/4d8cfdd7599c7b1916b42262d99fee84155849.png",
                  "bigImageUrl": "http://p0.meituan.net/xianfu/4d8cfdd7599c7b1916b42262d99fee84155849.png",
                  "saleVolume": 2608,
                  "originPrice": 16.0,
                  "currentPrice": 16.0,
                  "spuDesc": "高汤煮沸。加入鸡蛋丝，虾皮，枸杞，配少许黑芝麻、天然香辛料调味。",
                  "praiseNum": 9,
                  "sellStatus": 0,
                  "activityType": 0,
                  "skuList": [
                      {
                          "skuId": 916898610,
                          "spec": "(份)",
                          "soldStatus": 0,
                          "realStock": -1,
                          "activityStock": 0,
                          "minPurchaseNum": -1,
                          "restrict": -1,
                          "originPrice": 16.0,
                          "currentPrice": 16.0,
                          "boxFee": 1.0,
                          "skuPromotionInfo": "",
                          "count": 0
                      }
                  ],
                  "spuAttrList": [],
                  "spuPromotionInfo": "",
                  "activityPolicy": {
                      "discountByCount": {
                          "count": 0,
                          "discount": 1.0
                      }
                  },
                  "statusDesc": ""
              },
              {
                  "spuName": "红油手工小馄饨",
                  "unit": "份",
                  "spuId": 1264973037,
                  "tag": "26676265",
                  "activityTag": "",
                  "littleImageUrl": "http://p0.meituan.net/xianfu/80f73338ec8b52bb903c59f62de197b2130495.jpg",
                  "bigImageUrl": "http://p0.meituan.net/xianfu/80f73338ec8b52bb903c59f62de197b2130495.jpg",
                  "saleVolume": 757,
                  "originPrice": 18.0,
                  "currentPrice": 18.0,
                  "spuDesc": "纯手工制作，外皮劲道，馅料十足，搭配鲜榨红油，花生碎，芝麻，葱花等配料，鲜辣爽劲。",
                  "praiseNum": 3,
                  "sellStatus": 0,
                  "activityType": 0,
                  "skuList": [
                      {
                          "skuId": 1409960956,
                          "spec": "(份)",
                          "soldStatus": 0,
                          "realStock": -1,
                          "activityStock": 0,
                          "minPurchaseNum": -1,
                          "restrict": -1,
                          "originPrice": 18.0,
                          "currentPrice": 18.0,
                          "boxFee": 1.0,
                          "skuPromotionInfo": "",
                          "count": 0
                      }
                  ],
                  "spuAttrList": [],
                  "spuPromotionInfo": "",
                  "activityPolicy": {
                      "discountByCount": {
                          "count": 0,
                          "discount": 1.0
                      }
                  },
                  "statusDesc": ""
              },
              {
                  "spuName": "油泼辣子凉皮",
                  "unit": "份",
                  "spuId": 417938010,
                  "tag": "26676265",
                  "activityTag": "",
                  "littleImageUrl": "http://p1.meituan.net/xianfu/a29a98b01fc118c6c3f399588543165496791.jpg",
                  "bigImageUrl": "http://p1.meituan.net/xianfu/a29a98b01fc118c6c3f399588543165496791.jpg",
                  "saleVolume": 4149,
                  "originPrice": 16.0,
                  "currentPrice": 16.0,
                  "spuDesc": "凉拌即食。五得利小麦粉制作高筋度凉皮，配水煮面筋、黄瓜丝。加入岐山原产醋，宝鸡原产辣椒。通过传统工艺还原面皮纯粹自然的劲道柔韧。",
                  "praiseNum": 6,
                  "sellStatus": 0,
                  "activityType": 0,
                  "skuList": [
                      {
                          "skuId": 456636921,
                          "spec": "(份)",
                          "soldStatus": 0,
                          "realStock": -1,
                          "activityStock": 0,
                          "minPurchaseNum": -1,
                          "restrict": -1,
                          "originPrice": 16.0,
                          "currentPrice": 16.0,
                          "boxFee": 1.0,
                          "skuPromotionInfo": "",
                          "count": 0
                      }
                  ],
                  "spuAttrList": [],
                  "spuPromotionInfo": "",
                  "activityPolicy": {
                      "discountByCount": {
                          "count": 0,
                          "discount": 1.0
                      }
                  },
                  "statusDesc": "",
                  "productLabelPictureList": [
                      {
                          "pictureUrl": "http://p1.meituan.net/aichequan/c9bcb26d2e342c7bffd0267ae3f129c03286.png",
                          "width": "120",
                          "height": "30"
                      }
                  ]
              },
              {
                  "spuName": "羊肉泡馍",
                  "unit": "份",
                  "spuId": 1423050656,
                  "tag": "26676265",
                  "activityTag": "",
                  "littleImageUrl": "http://p1.meituan.net/xianfu/3bcdab426fb0edaa008d1c7226aadd04124010.jpg",
                  "bigImageUrl": "http://p1.meituan.net/xianfu/3bcdab426fb0edaa008d1c7226aadd04124010.jpg",
                  "saleVolume": 805,
                  "originPrice": 30.0,
                  "currentPrice": 30.0,
                  "spuDesc": "羊肉、木耳丝、笋丝、馍粒、粉丝",
                  "praiseNum": 5,
                  "sellStatus": 0,
                  "activityType": 0,
                  "skuList": [
                      {
                          "skuId": 1622460012,
                          "spec": "(份)",
                          "soldStatus": 0,
                          "realStock": -1,
                          "activityStock": 0,
                          "minPurchaseNum": -1,
                          "restrict": -1,
                          "originPrice": 30.0,
                          "currentPrice": 30.0,
                          "boxFee": 1.0,
                          "skuPromotionInfo": "",
                          "count": 0
                      }
                  ],
                  "spuAttrList": [],
                  "spuPromotionInfo": "",
                  "activityPolicy": {
                      "discountByCount": {
                          "count": 0,
                          "discount": 1.0
                      }
                  },
                  "statusDesc": ""
              }
          ],
          "end": true,
          "nextPageIndex": 0
      },
      {
          "tag": "26676266",
          "activityTag": "",
          "iconUrl": "",
          "categoryName": "新鲜果饮",
          "categoryType": 0,
          "spuList": [
              {
                  "spuName": "红枣醇豆浆",
                  "unit": "份",
                  "spuId": 1176232246,
                  "tag": "26676266",
                  "activityTag": "",
                  "littleImageUrl": "http://p0.meituan.net/xianfu/22243fc00d76ff2a9142ef9bfb6ab87899330.jpg",
                  "bigImageUrl": "http://p0.meituan.net/xianfu/22243fc00d76ff2a9142ef9bfb6ab87899330.jpg",
                  "saleVolume": 770,
                  "originPrice": 12.0,
                  "currentPrice": 12.0,
                  "spuDesc": "热饮，非转基因大豆榨取熬制，枣香浓郁，丝滑香甜。",
                  "praiseNum": 1,
                  "sellStatus": 0,
                  "activityType": 0,
                  "skuList": [
                      {
                          "skuId": 1305355892,
                          "spec": "(份)",
                          "soldStatus": 0,
                          "realStock": -1,
                          "activityStock": 0,
                          "minPurchaseNum": -1,
                          "restrict": -1,
                          "originPrice": 12.0,
                          "currentPrice": 12.0,
                          "boxFee": 0.0,
                          "skuPromotionInfo": "",
                          "count": 0
                      }
                  ],
                  "spuAttrList": [],
                  "spuPromotionInfo": "",
                  "activityPolicy": {
                      "discountByCount": {
                          "count": 0,
                          "discount": 1.0
                      }
                  },
                  "statusDesc": ""
              },
              {
                  "spuName": "古法熬制酸梅汤",
                  "unit": "份",
                  "spuId": 188342584,
                  "tag": "26676266",
                  "activityTag": "",
                  "littleImageUrl": "http://p0.meituan.net/xianfu/0d5dea66126621d2e8cc087899ebf24596969.jpg",
                  "bigImageUrl": "http://p0.meituan.net/xianfu/0d5dea66126621d2e8cc087899ebf24596969.jpg",
                  "saleVolume": 661,
                  "originPrice": 12.0,
                  "currentPrice": 12.0,
                  "spuDesc": "冷饮。乌梅，乌枣，山楂，陈皮，甘草，桂花，冰糖等，古老工艺熬制。",
                  "praiseNum": 3,
                  "sellStatus": 0,
                  "activityType": 0,
                  "skuList": [
                      {
                          "skuId": 203123849,
                          "spec": "(份)",
                          "soldStatus": 0,
                          "realStock": -1,
                          "activityStock": 0,
                          "minPurchaseNum": -1,
                          "restrict": -1,
                          "originPrice": 12.0,
                          "currentPrice": 12.0,
                          "boxFee": 0.0,
                          "skuPromotionInfo": "",
                          "count": 0
                      }
                  ],
                  "spuAttrList": [],
                  "spuPromotionInfo": "",
                  "activityPolicy": {
                      "discountByCount": {
                          "count": 0,
                          "discount": 1.0
                      }
                  },
                  "statusDesc": "",
                  "productLabelPictureList": [
                      {
                          "pictureUrl": "http://p0.meituan.net/aichequan/e4384905366c1a4d3a3d8c7831c79f7c1346.png",
                          "width": "60",
                          "height": "30"
                      },
                      {
                          "pictureUrl": "http://p1.meituan.net/aichequan/c9bcb26d2e342c7bffd0267ae3f129c03286.png",
                          "width": "120",
                          "height": "30"
                      }
                  ]
              },
              {
                  "spuName": "夏日百香果",
                  "unit": "份",
                  "spuId": 1444531096,
                  "tag": "26676266",
                  "activityTag": "",
                  "littleImageUrl": "http://p1.meituan.net/xianfu/2934ed0c5f99aef9018e0e7f703da09f82153.jpg",
                  "bigImageUrl": "http://p1.meituan.net/xianfu/2934ed0c5f99aef9018e0e7f703da09f82153.jpg",
                  "saleVolume": 396,
                  "originPrice": 13.0,
                  "currentPrice": 13.0,
                  "spuDesc": "",
                  "praiseNum": 3,
                  "sellStatus": 0,
                  "activityType": 0,
                  "skuList": [
                      {
                          "skuId": 1645793052,
                          "spec": "份(份)",
                          "soldStatus": 0,
                          "realStock": -1,
                          "activityStock": 0,
                          "minPurchaseNum": -1,
                          "restrict": -1,
                          "originPrice": 13.0,
                          "currentPrice": 13.0,
                          "boxFee": 0.0,
                          "skuPromotionInfo": "",
                          "count": 0
                      }
                  ],
                  "spuAttrList": [],
                  "spuPromotionInfo": "",
                  "activityPolicy": {
                      "discountByCount": {
                          "count": 0,
                          "discount": 1.0
                      }
                  },
                  "statusDesc": ""
              },
              {
                  "spuName": "满满奇异果可尔必思",
                  "unit": "份",
                  "spuId": 1492542247,
                  "tag": "26676266",
                  "activityTag": "",
                  "littleImageUrl": "http://p1.meituan.net/xianfu/16043f2079e9a8b43bb1a5f2039d7fdf179194.jpg",
                  "bigImageUrl": "http://p1.meituan.net/xianfu/16043f2079e9a8b43bb1a5f2039d7fdf179194.jpg",
                  "saleVolume": 217,
                  "originPrice": 17.0,
                  "currentPrice": 17.0,
                  "spuDesc": "",
                  "praiseNum": 0,
                  "sellStatus": 0,
                  "activityType": 0,
                  "skuList": [
                      {
                          "skuId": 1702022412,
                          "spec": "份(份)",
                          "soldStatus": 0,
                          "realStock": -1,
                          "activityStock": 0,
                          "minPurchaseNum": -1,
                          "restrict": -1,
                          "originPrice": 17.0,
                          "currentPrice": 17.0,
                          "boxFee": 0.0,
                          "skuPromotionInfo": "",
                          "count": 0
                      }
                  ],
                  "spuAttrList": [],
                  "spuPromotionInfo": "",
                  "activityPolicy": {
                      "discountByCount": {
                          "count": 0,
                          "discount": 1.0
                      }
                  },
                  "statusDesc": ""
              },
              {
                  "spuName": "满满水蜜桃可尔必思",
                  "unit": "份",
                  "spuId": 1492574104,
                  "tag": "26676266",
                  "activityTag": "",
                  "littleImageUrl": "http://p1.meituan.net/xianfu/1dc9bb41e99cb984c8db3e8da739bbd9234682.jpg",
                  "bigImageUrl": "http://p1.meituan.net/xianfu/1dc9bb41e99cb984c8db3e8da739bbd9234682.jpg",
                  "saleVolume": 357,
                  "originPrice": 17.0,
                  "currentPrice": 17.0,
                  "spuDesc": "",
                  "praiseNum": 2,
                  "sellStatus": 0,
                  "activityType": 0,
                  "skuList": [
                      {
                          "skuId": 1701942879,
                          "spec": "份(份)",
                          "soldStatus": 0,
                          "realStock": -1,
                          "activityStock": 0,
                          "minPurchaseNum": -1,
                          "restrict": -1,
                          "originPrice": 17.0,
                          "currentPrice": 17.0,
                          "boxFee": 0.0,
                          "skuPromotionInfo": "",
                          "count": 0
                      }
                  ],
                  "spuAttrList": [],
                  "spuPromotionInfo": "",
                  "activityPolicy": {
                      "discountByCount": {
                          "count": 0,
                          "discount": 1.0
                      }
                  },
                  "statusDesc": ""
              }
          ],
          "end": true,
          "nextPageIndex": 0
      },
      {
          "tag": "67082467",
          "activityTag": "",
          "iconUrl": "",
          "categoryName": "健康轻食",
          "categoryType": 0,
          "spuList": [
              {
                  "spuName": "摇摇沙拉",
                  "unit": "份",
                  "spuId": 188340793,
                  "tag": "67082467",
                  "activityTag": "",
                  "littleImageUrl": "http://p0.meituan.net/xianfu/d2ae6b714779303bac9dfe96e27fc6f6292769.png",
                  "bigImageUrl": "http://p0.meituan.net/xianfu/d2ae6b714779303bac9dfe96e27fc6f6292769.png",
                  "saleVolume": 1153,
                  "originPrice": 9.0,
                  "currentPrice": 9.0,
                  "spuDesc": "凉拌即食。选取球生菜、罗莎红生菜、胡萝卜、樱桃番茄、紫甘蓝、黄瓜、黑木耳7种蔬菜营养搭配。配中式油醋汁。",
                  "praiseNum": 3,
                  "sellStatus": 0,
                  "activityType": 0,
                  "skuList": [
                      {
                          "skuId": 203122960,
                          "spec": "(份)",
                          "soldStatus": 0,
                          "realStock": -1,
                          "activityStock": 0,
                          "minPurchaseNum": -1,
                          "restrict": -1,
                          "originPrice": 9.0,
                          "currentPrice": 9.0,
                          "boxFee": 0.0,
                          "skuPromotionInfo": "",
                          "count": 0
                      }
                  ],
                  "spuAttrList": [],
                  "spuPromotionInfo": "",
                  "activityPolicy": {
                      "discountByCount": {
                          "count": 0,
                          "discount": 1.0
                      }
                  },
                  "statusDesc": ""
              }
          ],
          "end": true,
          "nextPageIndex": 0
      },
      {
          "tag": "105111083",
          "activityTag": "",
          "iconUrl": "",
          "categoryName": "职有薪意 滋味满溢",
          "categoryType": 0,
          "spuList": [
              {
                  "spuName": "职有位来",
                  "unit": "份",
                  "spuId": 1571508175,
                  "tag": "105111083",
                  "activityTag": "",
                  "littleImageUrl": "http://p1.meituan.net/xianfu/f34ba89038cc31007e17adb9aa530c9685386.jpg",
                  "bigImageUrl": "http://p1.meituan.net/xianfu/f34ba89038cc31007e17adb9aa530c9685386.jpg",
                  "saleVolume": 0,
                  "originPrice": 31.5,
                  "currentPrice": 31.5,
                  "spuDesc": "经典腊汁肉夹馍+鸡骨浓汤酸辣粉",
                  "praiseNum": 0,
                  "sellStatus": 0,
                  "activityType": 0,
                  "skuList": [
                      {
                          "skuId": 1792189226,
                          "spec": "份(份)",
                          "soldStatus": 0,
                          "realStock": -1,
                          "activityStock": 0,
                          "minPurchaseNum": -1,
                          "restrict": -1,
                          "originPrice": 31.5,
                          "currentPrice": 31.5,
                          "boxFee": 4.0,
                          "skuPromotionInfo": "",
                          "count": 0
                      }
                  ],
                  "spuAttrList": [],
                  "spuPromotionInfo": "",
                  "activityPolicy": {
                      "discountByCount": {
                          "count": 0,
                          "discount": 1.0
                      }
                  },
                  "statusDesc": ""
              },
              {
                  "spuName": "薪满意足",
                  "unit": "份",
                  "spuId": 1572398055,
                  "tag": "105111083",
                  "activityTag": "",
                  "littleImageUrl": "http://p1.meituan.net/xianfu/64053535f626d529809f785d33a747dc89353.jpg",
                  "bigImageUrl": "http://p1.meituan.net/xianfu/64053535f626d529809f785d33a747dc89353.jpg",
                  "saleVolume": 0,
                  "originPrice": 31.5,
                  "currentPrice": 31.5,
                  "spuDesc": "罗卜干鸡肉馍+油泼辣子凉皮",
                  "praiseNum": 0,
                  "sellStatus": 0,
                  "activityType": 0,
                  "skuList": [
                      {
                          "skuId": 1791058936,
                          "spec": "份(份)",
                          "soldStatus": 0,
                          "realStock": -1,
                          "activityStock": 0,
                          "minPurchaseNum": -1,
                          "restrict": -1,
                          "originPrice": 31.5,
                          "currentPrice": 31.5,
                          "boxFee": 4.0,
                          "skuPromotionInfo": "",
                          "count": 0
                      }
                  ],
                  "spuAttrList": [],
                  "spuPromotionInfo": "",
                  "activityPolicy": {
                      "discountByCount": {
                          "count": 0,
                          "discount": 1.0
                      }
                  },
                  "statusDesc": "",
                  "productLabelPictureList": [
                      {
                          "pictureUrl": "http://p0.meituan.net/aichequan/a6118176c9bf22b6066fe4eba95c75d41341.png",
                          "width": "60",
                          "height": "30"
                      }
                  ]
              }
          ],
          "end": true,
          "nextPageIndex": 0
      }
  ]
}

const day4ListData = Mock.mock({
  'detail|500':[
      {
          name:'@cname',
          'rate|1-5':1,
          image:'@image(300X300)',
          'price|300-1500':1,
          title:'@ctitle',
          address: Mock.Random.city(true),
          email: '@email'
      }
  ]
})

module.exports = {
  wxData,
  wxMailList,
  day4ListData,
  day5FootList,
}