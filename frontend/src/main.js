// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import axios from 'axios'
import App from './App'
import VueRouter from 'vue-router'

import VeeValidate from 'vee-validate'
import messagesZH from './assets/js/validdate_zh_CN'
require('toastr/build/toastr.min.css')
// require('sweetalert/dist/sweetalert.css')
require('./assets/css/font-awesome.css')
// import VueResource from 'vue-resource'

import routes from './routes'
import store from './store/'

window.toastr = require('toastr/build/toastr.min.js')
// require('sweetalert/dist/sweetalert.min.js')

// start mock
// import Mock from './mock'
// Mock.bootstrap()

Vue.use(VueRouter)

Vue.use(VeeValidate, {
  locale: 'zh',
  dictionary: {
    zh: {
      messages: messagesZH
    }
  }
})
// Vue.use(VueResource)
axios.defaults.baseURL = '/api/v1'
if (store.state.user.token) {
  axios.defaults.headers.common['authorization'] = store.state.user.token
}
axios.defaults.headers.common['csrf_token'] = window.Laravel_csrfToken
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
  config.timeout = 15000 // 设置默认超时时间
  return config
}, function (error) {
    // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
  return response
}, function (error) {
  var status = error.response.status
  console.log('status', status)
  console.log('error', error)
  let errormsg = ''
  if (status === 403) {
    errormsg = '禁止访问'
  } else if (status === 404) {
    errormsg = '请求资源错误'
  } else if (status === 401) {
    errormsg = '请重新登录'
  } else {
    errormsg = '服务器出现错误，请刷新页面重试'
  }
  // alert('server is wrong，请刷新重试')
  if (errormsg !== '') {
    window.toastr.error(errormsg)
  }
  if (status === 401) {
    window.location.href = '/'
  }
    // Do something with response error
  return Promise.reject(error)
})

Vue.prototype.$http = axios
// Vue.http.options.root = '/api'

// Vue.http.interceptors.push((request, next) => {

//     Enable this when you have a backend that you authenticate against
//   var headers = request.headers

//   if (window.location.pathname !== '/login' && !headers.hasOwnProperty('Authorization')) {
//     headers.Authorization = this.$store.state.token
//   }

//   // console.log(headers)

//   // continue to next interceptor without modifying the response
//   next()
// })
//

var router = new VueRouter({
  routes: routes,
  mode: 'hash',
  linkActiveClass: 'active',
  // mode: 'history',
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  // window.console.log('Transition', transition)
  console.log('store.user', store.state.user)
  var isLogin = Boolean(store.state.user.token)
  if (!isLogin && to.path !== '/login') {
    window.console.log('Not authenticated')
    return next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router: router,
  store: store,
  components: { App }
})
