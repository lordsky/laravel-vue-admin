import Login from './views/Login.vue'
import NotFound from './views/404.vue'

import goods from './views/goods/index.vue'
import goodsDetail from './views/goods/detail.vue'
import cart from './views/cart/index.vue'

const routes = [{
  path: '/',
  component: goods
}, {
  path: '/login',
  auth: false,
  component: Login
}, {
  path: '/goods',
  component: goods
}, {
  path: '/goods/:id',
  component: goodsDetail
}, {
  path: '/cart',
  component: cart
}, {
  // not found handler
  path: '*',
  component: NotFound
}]

export default routes
