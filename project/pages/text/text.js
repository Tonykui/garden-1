Page({
  data: {
    
        imgArr: [
          '../../image/16.jpg',
          '../../image/10.jpg',
          '../../image/12.jpg'
        ]
     ,
    goodsList: [
      {
        time:'2019.4.11 13.55',
        version: '今天天气好',
        id:'小明',
        head:'../../image/28.jpg',
        see:'20',
        comment:'10',
        like:'20',
        collected: 0

      },
      {
        time: '2019.4.11 13.55',
        version: '今天天气好',
        id: '小明',
        head: '../../image/27.jpg',
        see: '20',
        comment: '10',
        like: '20',
        collected: 0

      }
      ,
      {
        time: '2019.4.11 13.55',
        version: '今天天气好',
        id: '小明',
        head: '../../image/28.jpg',
        see: '20',
        comment: '10',
        like: '20',
        collected: 0

      }
      ,
      {
        time: '2019.4.11 13.55',
        version: '今天天气好',
        id: '小明',
        head: '../../image/27.jpg',
        see: '20',
        comment: '10',
        like: '20',
        collected: 0

      }
    ]
  },
  // 更改点赞状态
  onCollectionTap: function (event) {
    // 获取当前点击下标
    var index = event.currentTarget.dataset.index;
    // data中获取列表
    var message = this.data.goodsList;
    for (let i in message) { //遍历列表数据
      if (i == index) { //根据下标找到目标
        var collectStatus = false
        if (message[i].collected == 0) { //如果是没点赞+1
          collectStatus = true
          message[i].collected = parseInt(message[i].collected) + 1
          message[i].like = parseInt(message[i].like) + 1
        } else {
          collectStatus = false
          message[i].collected = parseInt(message[i].collected) - 1
          message[i].like = parseInt(message[i].like) - 1
        }
        
        wx.showToast({
          title: collectStatus ? '点赞成功' : '取消点赞',
        })
      }
    }
    this.setData({
      goodsList: message
    })
  },

  onLoad: function () {
    wx.request({
      url: url,
      data: {
        'time': time,  //时间
        'id': id,    //用户名
        'version': version,//动态内容
        'head':head,    //头像
        'see':see,     //浏览次数
        'comment':comment,  //评论次数
        'like':like,  //点赞次数
        'imgArr': imgarr    //动态图片



      },
      method: 'post',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data);
      },
      fail: function (res) {
        console.log(".....fail.....");
      }
    })
  }
  

})


