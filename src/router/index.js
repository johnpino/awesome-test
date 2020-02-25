import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/top-10',
    name: 'Top10',
    component: () => import(/* webpackChunkName: "top10" */ '../views/Top10.vue')
  },
  {
    path: '/latest',
    name: 'Latest',
    component: () => import(/* webpackChunkName: "latest" */ '../views/Latest.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
