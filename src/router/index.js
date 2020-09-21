import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/board',
    component: () => import('@/views/board/index.vue')
  },
  {
    path: '/board/:info',
    component: () => import('@/views/board/info.vue')
  },
  {
    path: '/board/:info/:article',
    component: () => import('@/views/board/article.vue')
  },
  {
    path: '*',
    name: 'error',
    component: () => import('@/views/error.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
