import Login from './views/Login.vue'
import AdminView from './views/Admin.vue'
import NotFound from './views/404.vue'
import DashboardView from './views/Dashboard.vue'
import OrderView from './views/order/Index.vue'
import OrderDetailView from './views/order/Detail.vue'
import GeneratorCreateView from './views/generator/Create.vue'
import CategoryView from './views/category/Index.vue'
import CategoryCreateView from './views/category/Create.vue'

const routes = [
  {
    path: '/',
    component: Login
  }, {
    path: '/login',
    auth: false,
    component: Login
  }, {
    path: '/admin',
    component: AdminView,
    children: [
      {
        path: '',
        component: DashboardView,
        name: '控制台',
        description: '控制台'
      }, {
        path: 'order',
        component: OrderView,
        name: '订单'
      }, {
        path: 'order/:id',
        component: OrderDetailView,
        name: '订单详情'
      }, {
        path: 'category',
        component: CategoryView,
        name: '分类'
      }, {
        path: 'category/create',
        component: CategoryCreateView,
        name: '创建新分类'
      }, {
        path: 'generator',
        component: GeneratorCreateView,
        name: '表单生成器'
      }
    ]
  }, {
    // not found handler
    path: '*',
    component: NotFound
  }
]

export default routes
