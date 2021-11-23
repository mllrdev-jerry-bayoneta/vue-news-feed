import RouteName from '@/enum/routes-name.enum'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/home.vue'
import Feed from '@/views/feed.vue'
import Edit from '@/views/edit.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: RouteName.HOME,
    component: Home
  },
  {
    path: '/feed',
    name: RouteName.FEED,
    component: Feed
  },
  {
    path: '/edit/:id',
    name: RouteName.EDIT,
    component: Edit
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
