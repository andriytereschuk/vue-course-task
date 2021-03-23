import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Characters from '../views/Characters.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/characters'
  },
  {
    path: '/characters',
    component: Characters
  },
  {
    path: '/favourites',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Favourites.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
