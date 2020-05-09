function createFly () {
  if (mpvuePlatform === 'wx') {
    const Fly = require('flyio/dist/npm/wx')
    return new Fly()
  }
  return null
}

function handleError (err) {
  console.log(err)
}

export function get (url, params = {}) {
  const fly = createFly()
  if (fly) {
    return new Promise((resolve, reject) => {
      fly
        .get(url, params)
        .then(response => {
          if (response && response.data && response.data.code === 200) {
            resolve(response)
          } else {
            reject(response.data.msg)
          }
        })
        .catch(err => {
          handleError(err)
          reject(err)
        })
    })
  }
}

export function post (url, params = {}) {
  const fly = createFly()
  if (fly) {
    return new Promise((resolve, reject) => {
      fly
        .post(url, params)
        .then(response => {
          console.log(response)
          resolve(response)
        })
        .catch(err => {
          handleError(err)
          reject(err)
        })
    })
  }
}

// import Vue from 'vue'
// import { response } from 'express'
// var Fly = require('flyio/dist/npm/wx.js')
// var fly = new Fly()

// fly.interceptors.request.use((config, promise) => {
//   config.headers['X-Tag'] = 'flyio'
//   return config
// })

// fly.config.baseURL = 'http://neteasecloudmusicapi.zhaoboy.com/'
// Vue.prototype.$http = fly
// export default fly
