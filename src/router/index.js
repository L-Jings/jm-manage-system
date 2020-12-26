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
      meta: { bread: ['账户管理', '所有人员'], keepAlive: false },//存储面包屑导航
      component: () => import('@/views/account/all.vue')
    }, {
      path: '/product/all',
      name: 'product_all',
      meta: { bread: ['产品管理', '全部产品'], keepAlive: true },
      component: () => import('@/views/product/all.vue')
    }, {
      path: '/product/detail',
      name: 'product_detail',
      meta: { bread: ['产品管理', '全部产品', '产品详情'], keepAlive: false },
      component: () => import('@/views/product/detail.vue')
    },
    {
      path: "/orders/all",
      name: "orders_all",
      meta: { bread: ["订单管理", "所有订单"], keepAlive: false },
      component: () => import("../views/orders/index.vue")
    },
    {
      path: "/customer/info",
      name: "customer_info",
      meta: { bread: ["客户管理", "基本信息"], keepAlive: true },
      component: () => import("../views/customer/index.vue")
    }, {
      path: "/my",
      name: 'my',
      component: () => import("../views/my/index.vue")
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
