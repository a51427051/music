function createFly () {
  if(){
    
  }
}


import Vue from 'vue'
var Fly = require('flyio/dist/npm/wx.js')
var fly = new Fly()

fly.interceptors.request.use((config, promise) => {
  config.headers['X-Tag'] = 'flyio'
  return config
})

fly.config.baseURL = 'http://neteasecloudmusicapi.zhaoboy.com/'
Vue.prototype.$http = fly
export default fly


