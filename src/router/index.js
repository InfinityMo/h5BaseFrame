import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '首页',
      isShowHead: true,
      isShowTitle: true,
      isShowBottomNav: false,
      keepAlive: true
    }
  }, {
    path: '/403',
    name: 'Forbidden',
    meta: {
      title: '403',
      isShowHead: true,
      isShowTitle: true
    },
    component: () => import('@/views/403/index.vue')
  }, {
    path: '*',
    name: 'None',
    meta: {
      title: '404',
      isShowHead: true,
      isShowTitle: true
    },
    component: () => import('@/views/404/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
