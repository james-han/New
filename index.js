//index.js
//Get an application instance
const app = getApp();
let pretty_date = require('../../utils/util.js')//Time function interface

Page({

  /**
   * The initial data of the page
   */
  data: {
    
  },

  /**
   *
Life cycle function - monitor page load
   */
  onLoad: function (options) {
    let that = this;
    this.setData({
      open_show: true
    });
//Request API data
    wx.request({
      url: 'https://hn.algolia.com/api/v1/search_by_date?query=javascript',
      method: 'get',
      success: res => {
        this.setData({
          news_list: res.data.hits
        });
        let new_list = this.data.news_list
        for (let i = 0; i < new_list.length;i++){
          this.setData({ 
            ['news_list[' + i + '].date']: pretty_date.countdown(this, new_list[i].created_at),
          })
        }
      }
    });
//Opening animation
    let animation = wx.createAnimation({
      timingFunction: 'ease',
    });
    this.animation = animation;
    animation.rotate(720).step({ duration: 2000 });
    this.setData({
      animation: animation.export(),
    });
    setTimeout(function(){
      that.setData({
        open_show:false
      })
    },3000)
  },
//Delete 'trash delete button' event
  deleted:function(e){
    let that = this;
    let index = e.currentTarget.dataset.index;
    let animation = wx.createAnimation({
      timingFunction: 'slow',
    });
    this.animation = animation;
    animation.translateX(-750).step({ duration: 700 });
    this.setData({
      ['news_list[' + index + '].animation']: animation.export(),
    });
    setTimeout(function(){
      that.setData({
        ['news_list[' + index + '].story_title']: null,
        ['news_list[' + index + '].title']: null,
      })
    },700)
    
  },
//simulate opening 'story_url' or 'url' event
  open_url:function(e){
    let that = this;
    let index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../story/story?index=index',
    });
    app.globalData.story_url = this.data.news_list[index].story_url || this.data.news_list[index].url
  },
})