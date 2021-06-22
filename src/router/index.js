import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/news',
    name: 'News',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/News.vue')
  },
  {
    path: '/game-info',
    name: 'Game Info',
    component: () => import(/* webpackChunkName: "about" */ '../views/GameInfo.vue')
  },
  {
    path: '/buy-now',
    name: 'Purchase Game',
    component: () => import(/* webpackChunkName: "about" */ '../views/BuyNow.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
