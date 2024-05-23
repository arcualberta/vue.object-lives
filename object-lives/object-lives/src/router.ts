import { createRouter, createWebHistory } from 'vue-router'
import { HomeView, ContributorsView, DiscoveryView, DiscoveryWorkshopView, PublicationsView, ProjectView, SupportView } from '@/views'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/TheProject',
    name: 'TheProject',
    component: ProjectView
  },
  {
    path: '/TheContributors',
    name: 'TheContibutors',
    component: ContributorsView
  },
  {
    path: '/DiscoveryProcess',
    name: 'DiscoveryProcess',
    component: DiscoveryView
  },
  {
    path: '/DiscoveryWorkshop',
    name: 'DiscoveryWorkshop',
    component: DiscoveryWorkshopView
  },
  {
    path: '/Publications',
    name: 'Publications',
    component: PublicationsView
  },
  {
    path: '/Support',
    name: 'Support',
    component: SupportView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
