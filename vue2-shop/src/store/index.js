import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import cart from './modules/cart'

Vue.use(Vuex)

const localStoragePlugin = store => {
  store.subscribe((mutation, { cart }) => {
    window.localStorage.setItem('shopping-cart', JSON.stringify(cart.cart_goods))
  })
}

const plugins = [localStoragePlugin]
export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production', // 在非生产环境下，使用严格模式
  modules: {
    user,
    cart
  },
  plugins
})
