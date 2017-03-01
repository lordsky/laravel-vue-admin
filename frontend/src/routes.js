import Login from './views/Login.vue'
import AdminView from './views/Admin.vue'
import NotFound from './views/404.vue'
import DashboardView from './views/Dashboard.vue'
import OrderView from './views/order/Index.vue'
import OrderDetailView from './views/order/Detail.vue'
import GeneratorCreateView from './views/generator/Create.vue'
import CategoryView from './views/category/Index.vue'
import MenuView from './views/menu/Index.vue'
import PermissionView from './views/system/permission.vue'
import RoleView from './views/system/role.vue'

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
        path: 'menu',
        component: MenuView,
        name: '菜单'
      }, {
        path: 'system/permission',
        component: PermissionView,
        name: '权限管理'
      }, {
        path: 'system/role',
        component: RoleView,
        name: '角色管理'
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
