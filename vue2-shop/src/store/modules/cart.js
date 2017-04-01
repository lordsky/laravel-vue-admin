import * as types from '../mutation-types'
import _ from 'lodash'

const state = {
  cart_goods: JSON.parse(window.localStorage.getItem('shopping-cart') || '[]'),
  messageInfo: '中文'
}

// mutations
const mutations = {

  [types.ADD_CART]: function (state, product) {
    const record = state.cart_goods.find(p => p.id === product.id)
    console.log('record', record)
    if (!record) {
      console.log('record push')
      state.cart_goods.push({
        ...product,
        quantity: 1
      })
    } else {
      console.log('record ++')
      record.quantity ++
    }
    window.toastr.info('添加到购物车成功')
  },

  [types.DEL_CART]: function (state, product) {
    state.cart_goods = state.cart_goods.filter(p => p.id !== product.id)
  },

  [types.UPD_CART]: function (state) {
    state.cart_goods = []
    state.messageInfo = '提交成功！'
  }
}

export default {
  state,
  mutations,
  actions: {
    addToCart ({ commit }, product) {
      commit(types.ADD_CART, product)
    },
    removeFromCart ({ commit }, product) {
      commit(types.DEL_CART, product)
    },
    updateQuantity ({ commit }, { product, quantity }) {
      commit(types.UPD_CART, { product, quantity })
    }
  },
  getters: {
    summary (state) {
      return _.sumBy(state.cart_goods, (p) => {
        return p.quantity * p.price
      })
    },
    cart_total (state) {
      return _.sumBy(state.cart_goods, (p) => {
        return p.quantity
      })
    }
  }
}
