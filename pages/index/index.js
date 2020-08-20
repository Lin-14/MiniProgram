// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var post_content = [{
      date:"2020.8.19",
      title:"库里带儿子看球",
      content:"8月19日讯 今日，勇士后卫斯蒂芬-库里更新了个人Instagram，晒出自己与儿子卡农的合照。库里写道：“在西海岸早中晚餐的时候都能看季后赛？好活多整点。”",
      author_img:"/images/avatar/1.png",
      post_img:"/images/post/4.jpg",
      view_num:"300",
      collect_num:"123"
    },
    {
      date:"2020.8.12",
      title:"库里又跑去打高尔夫",
      content:"8月12日讯 今日，一名勇士博主更新了Instagram，晒出勇士后卫斯蒂芬-库里在周末傍晚于哈丁公园打高尔夫的片段。",
      author_img:"/images/avatar/2.png",
      post_img:"/images/post/5.jpg",
      view_num:"340",
      collect_num:"173"
    },
    {
      date:"2020.8.19",
      title:"库里夫妇出游",
      content:"8月5日讯 今日，勇士后卫斯蒂芬-库里的妻子阿耶莎更新了个人Instagram，晒出两张两人驾车出游时的照片。阿耶莎写道：“当一次驾车变成一次约会，喜欢一次美好的出游和一张不错的歌单。”",
      author_img:"/images/avatar/3.png",
      post_img:"/images/post/6.jpg",
      view_num:"390",
      collect_num:"223"
    }
  ]
    this.setData({
      post_content
    })
    console.log('onload')
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

  }
})