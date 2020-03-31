// pages/shopCar/shopCar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: -1,
    list: [{
      name: '小米7',
      prices: 2000,
      num: 1
    }, {
      name: '苹果X',
      prices: 6000,
      num: 2
    }, {
      name: '华为9',
      prices: 4000,
      num: 1
    }, {
      name: 'vivo10',
      prices: 2000,
      num: 3
    }, ]
  },
  changenum(e) {
    let index = e.currentTarget.dataset['index'];
    let val = Number(e.currentTarget.dataset['num'])
    let list = this.data.list;
    let num = list[index].num;
    num = num + val;
    list[index].num = num;
    this.setData({
      list: list
    });
    // this.getTotalPrice();
  },
  del(e) {
    let index = e.currentTarget.dataset['index'];
    let list = this.data.list;
    list.splice(index, 1);
    this.setData({
      list: list
    })
    console.log(index)
  },
  selcted(e) {
    let index = e.currentTarget.dataset['index'];
    this.setData({
      num: index
    })
  },
  // getTotalPrice() {
  //   let list = this.data.list; // 获取购物车列表
  //   let total = 0;
  //   for (let i = 0; i < list.length; i++) {
  //       total += list[i].num * list[i].price; // 所有价格加起来
  //   }
  //   this.setData({ // 最后赋值到data中渲染到页面
  //     list: list,
  //     getTotalPrice: total.toFixed(2)
  //   });
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
   
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})