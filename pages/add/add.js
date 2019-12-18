// pages/add/add.js
Page({

  /*页面的初始数据*/
  data: {
    image:''
  },

  /*生命周期函数--监听页面加载*/
  onLoad: function (e) {
      this.setData({
        id: Date.now()
      })
  },
  // bindinput 事件，内容修改后绑定到本页面实例
  change(e) {
    this.setData({
      content: e.detail.value
    })
  },

  cancel() {
    wx.navigateBack();
  },

  sure() {
    /*var reg = /^\s*$/g;
    if (!this.data.content || reg.test(this.data.content)) {
      return;
    }*/
    this.setData({
      time: Date.now()
    });
    setValue(this);
    wx.navigateBack();
  },
  chooseimage: function () {
    var _this = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        _this.setData({
          tempFilePaths: res.tempFilePaths,
          image: res.tempFilePaths
        })
      }
    })
  },

  /* 生命周期函数--监听页面初次渲染完成*/
  onReady: function () {

  },

  /* 生命周期函数--监听页面显示*/
  onShow: function () {

  },

  /* 生命周期函数--监听页面隐藏*/
  onHide: function () {

  },

  /* 生命周期函数--监听页面卸载*/
  onUnload: function () {

  },

  /* 页面相关事件处理函数--监听用户下拉动作*/
  onPullDownRefresh: function () {

  },

  /* 页面上拉触底事件的处理函数*/
  onReachBottom: function () {

  },

  /*用户点击右上角分享*/
  onShareAppMessage: function () {

  }
})

function getData(id, page) {
  var arr = wx.getStorageSync("txt");
  arr.forEach(function (item) {
    if (arr.length) {
      //  遍历数据并根据id显示当前记事本内容
      if (item.id == id) {
        page.setData({
          //  匹配记事本后将id与content绑定到页面实例
          id: item.id,
          content: item.content
        })
      }
    }
  })
}

function setValue(page) {
  var arr = wx.getStorageSync("txt");
  var data = [], flag = true;
  // data数组用于存储更新或新加的记事本内容
  if (arr.length) {
    // 修改原有记事本内容
    arr.forEach(function (item) {
      if (item.id == page.data.id) {
        item.time = Date.now();
        item.content = page.data.content;
        // flag用于控制 是修改记事本内容还是新增记事本内容
        flag = false;
      }
      data.push(item);
    })
  }
  // 新增记事本内容
  if (flag) {
    data.push(page.data)
  }
  // 最后将新的内容加至localStore中
  wx.setStorageSync("txt", data)
}