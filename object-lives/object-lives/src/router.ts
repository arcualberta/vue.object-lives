import { createRouter, createWebHistory } from 'vue-router'
import { HomeView, ContributorsView, DiscoveryView, DiscoveryWorkshopView, PublicationsView, ProjectView, SupportView, loginView, SubmissionWorkshopView, success } from '@/views'
import { AnnetteView, AnneWhitelawView, BeverlyLemireView, CynthiaCooperView, JonathanLaineyView, JudyHalfView, JulieAnnView, KatiePollockView, LauraPeersView, LaurieBertramView, SarahCarterView, SarahKomarniskyView, SarahNesbittView, SusanBerryView } from '@/views'



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
  },
  {
    path: '/TheContributors/Annette',
    name: 'Annette',
    component: AnnetteView
  },
  {
    path: '/TheContributors/AnneWhitelaw',
    name: 'AnneWhitelawView',
    component: AnneWhitelawView
  },
  {
    path: '/TheContributors/BeverlyLemire',
    name: 'BeverlyLemireView',
    component: BeverlyLemireView
  },
  {
    path: '/TheContributors/CynthiaCooper',
    name: 'CynthiaCooperView',
    component: CynthiaCooperView
  },
  {
    path: '/TheContributors/JonathanLainey',
    name: 'JonathanLaineyView',
    component: JonathanLaineyView
  },
  {
    path: '/TheContributors/JudyHalf',
    name: 'JudyHalfView',
    component: JudyHalfView
  },
  {
    path: '/TheContributors/JulieAnn',
    name: 'JulieAnnView',
    component: JulieAnnView
  },
  {
    path: '/TheContributors/KatiePollock',
    name: 'KatiePollockView',
    component: KatiePollockView
  },
  {
    path: '/TheContributors/LauraPeers',
    name: 'LauraPeersView',
    component: LauraPeersView
  },
  {
    path: '/TheContributors/LaurieBertram',
    name: 'LaurieBertramView',
    component: LaurieBertramView
  },
  {
    path: '/TheContributors/SarahCarter',
    name: 'SarahCarterView',
    component: SarahCarterView
  },
  {
    path: '/TheContributors/SaraKomarnisky',
    name: 'SarahKomarniskyView',
    component: SarahKomarniskyView
  },
  {
    path: '/TheContributors/SarahNesbitt',
    name: 'SarahNesbittView',
    component: SarahNesbittView
  },
  {
    path: '/TheContributors/SusanBerry',
    name: 'SusanBerryView',
    component: SusanBerryView
  },
  {
    path: '/Login',
    name: 'LoginView',
    component: loginView
  },
  {
    path: '/success',
    name: 'success',
    component: success
  },
  {
    path: '/SubmissionWorkshop',
    name: 'SubmissionWorkshopView',
    component: SubmissionWorkshopView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
