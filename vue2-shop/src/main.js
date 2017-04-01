// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueRouter from 'vue-router'
import VueLazyload from 'vue-lazyload'

import store from './store/'
import routes from './routes'

require('toastr/build/toastr.min.css')
window.toastr = require('toastr/build/toastr.min.js')

axios.defaults.baseURL = '/api'
axios.defaults.headers.common['csrf_token'] = window.Laravel_csrfToken
axios.defaults.headers.get['Content-Type'] = 'application/json'
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
  config.timeout = 15000 // 设置默认超时时间
  return config
}, function (error) {
    // Do something with request error
  return Promise.reject(error)
})

Vue.prototype.$http = axios
Vue.use(VueRouter)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/static/img/loading.gif',
  loading: '/static/img/loading.gif',
  attempt: 1
})

var router = new VueRouter({
  routes: routes,
  mode: 'hash',
  // mode: 'history',
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  store: store,
  components: { App }
})
