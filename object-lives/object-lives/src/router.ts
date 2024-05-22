import { createRouter, createWebHistory } from 'vue-router'
import { HomePageView } from './views/main'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePageView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
