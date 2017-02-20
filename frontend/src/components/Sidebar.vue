<template>
  <div id='sidebar'>
    <!-- <ul class="sidebar-menu">
      <li class="header">TOOLS</li>
      <li class="active pageLink" v-on:click="toggleMenu">
        <router-link to="/"><i class="fa fa-desktop"></i><span class="page">Dashboard</span></router-link>
      </li>
      <li class="pageLink" v-on:click="toggleMenu">
        <router-link to="/admin/order"><i class="fa fa-table"></i><span class="page">订单</span></router-link>
      </li>
      <li class="header">ME</li>
      <li class="pageLink" v-on:click="toggleMenu">
        <router-link to="/tasks"><i class="fa fa-tasks"></i><span class="page">Tasks</span></router-link>
      </li>
      <li class="pageLink" v-on:click="toggleMenu">
        <router-link to="/setting"><i class="fa fa-cog"></i><span class="page">Settings</span></router-link>
      </li>
      <li class="header">LOGS</li>
      <li class="pageLink" v-on:click="toggleMenu">
        <router-link to="/access"><i class="fa fa-book"></i><span class="page">Access</span></router-link>
      </li>
      <li class="pageLink" v-on:click="toggleMenu">
        <router-link to="/server"><i class="fa fa-hdd-o"></i><span class="page">Server</span></router-link>
      </li>
      <li class="pageLink" v-on:click="toggleMenu">
        <router-link to="/repos"><i class="fa fa-heart"></i><span class="page">Repos</span><small class="label pull-right bg-green">AJAX</small></router-link>
      </li>
      <li class="header">PAGES</li>
      <li class="pageLink" v-on:click="toggleMenu">
        <router-link to="/login"><i class="fa fa-circle-o text-yellow"></i> <span class="page">Login</span></router-link>
      </li>
      <li class="pageLink" v-on:click="toggleMenu">
        <router-link to="/404"><i class="fa fa-circle-o text-red"></i> <span class="page">404</span></router-link>
      </li>
    </ul> -->
    <ul class="nav sidebar-menu">
      <!--通过v-for来进行菜单列表的显示，并绑定v-on:click事件进行点击控制-->
      <li v-for="menu in menus" v-on:click="toggleMenu(menu)" v-bind:class="{treeview: !menu.href}">
        <a :to='menu.href' href='void(0)'><i class="fa" v-bind:class="menu.icon"></i><span>{{menu.text}}</span><i v-show="!menu.href" class="fa fa-angle-left pull-right"></i></a>
        <transition name="slide">
          <ul class="treeview-menu menu-open" v-on:click.stop>
            <router-link v-for="childMenu in menu.childMenus" v-bind:key="childMenu.text" :to="childMenu.href" tag="li">
              <a><i class="fa fa-reorder"></i><span>{{ childMenu.text }}</span></a>
            </router-link>
          </ul>
        </transition>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      menus: [{
        icon: 'fa-file-o',
        text: '首页',
        class: '',
        href: '/admin'
      }, {
        icon: 'fa-dashboard', // icon用于储存菜单对应的图标
        text: '服务管理', // text用于储存该菜单显示名 称
        class: '',
        childMenus: [{
          href: '/admin', // href用于设定该菜单跳转路由
          text: '首页' // text用于储存该菜单显示名称
        }, {
          href: '/admin/order', // href用于设定该菜单跳转路由
          text: '订单列表' // text用于储存该菜单显示名称
        }]
      }, {
        icon: 'fa-cubes',
        text: '订单管理',
        class: '',
        childMenus: [{
          href: '/admin/order',
          text: '产品信息'
        }, {
          href: '/admin/order',
          text: '新建'
        }]
      }, {
        icon: 'fa-list',
        text: '商品分类管理',
        class: '',
        href: '/admin/category'
      }, {
        icon: 'fa-file-o',
        text: '日志管理',
        class: '',
        href: '/admin/log'
      }]
    }
  },
  mounted () {
    this.expandAllMenu()
  },
  watch: {
    $route () {
      // 检查是否一级菜单链接
      this.checkMenuActived(this.$route.path)
    }
  },
  methods: {
    toggleMenu1: function (event) {
      // remove active from li
      window.$('li.pageLink').removeClass('active')
      // Add it to the item that was clicked
      event.toElement.parentElement.className = 'pageLink active'
    },
    expandAllMenu () {
      this.menus.forEach(item => {
        if (item.childMenus) {
        }
      })
    },
    toggleMenu: function (menu) {
      if (menu.href) {
        this.$router.push(menu.href)
        this.menus.forEach(item => {
          item.class = ''
        })
        menu.class = 'active'
        return
      }
      menu.class = menu.class === '' ? 'active' : ''
    },
    checkMenuActived (path) {
      // 遍历所有的一级菜单
      this.menus.forEach(item => {
        // 若非当前路由，则取消激活状态
        if (item.childMenus && item.href !== path) {
          item.class = ''
        }
      })
    }
  }
}
</script>