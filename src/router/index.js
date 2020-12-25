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
    },{
      path: '/product/all',
      name: 'product_all',
      meta: { bread: ['产品管理', '全部产品'] },
      component: () => import('@/views/product/all.vue')
    },{
      path: '/product/detail',
      name: 'product_detail',
      meta: { bread: ['产品管理', '全部产品','产品详情'] },
      component: () => import('@/views/product/detail.vue')
    }]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  }, { //页面丢失
    path: '*',
    name: '404',
    component: () => import('../views/404.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
