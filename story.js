// pages/story/story.js
const app = getApp();
Page({
  data: {
  },

  onLoad: function (options) {
    this.setData({
      story_url: app.globalData.story_url
    })
  },

  
})