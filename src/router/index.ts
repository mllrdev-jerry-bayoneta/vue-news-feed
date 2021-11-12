import RouteName from '@/enum/routes-name.enum'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Feed from '@/views/Feed.vue'
import Edit from '@/views/Edit.vue'

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
