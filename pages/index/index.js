// pages/index/index.js
Page({
  data: {
    lists: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    initData(this);
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    initData(this);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  add() {
    // 增加新的记事本内容
    wx.navigateTo({
      url: '../add/add'
    })
  },
  del: function (e) {
    var current = e.currentTarget.dataset.index;
    var list = this.data.lists;
    list.splice(current, 1)
    this.setData({
      lists: list
    })
    wx.setStorageSync("txt", this.data.lists)
  }
})
function initData(page) {
  var arr = wx.getStorageSync('txt');
  page.setData({
    lists: arr
  })
}