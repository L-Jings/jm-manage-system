import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    redirect: '/index',
    component: () => import('../views/Layout.vue'),
    children: [{
      path: '/index',
      name: 'index',
      component: () => import('@/views/index/index.vue')
    }, {
      path: '/account/all',
      name: 'account_all',
      meta: { bread: ['账户管理', '所有人员'] },//存储面包屑导航
      component: () => import('@/views/account/all.vue')
    }]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  }
]

const router = new VueRouter({
  routes
})

export default router
