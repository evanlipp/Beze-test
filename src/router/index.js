import { createRouter, createWebHistory } from 'vue-router'
import OrganizationView from '@/views/OrganizationView'
import AddressView from '@/views/AddressView'
import BuildingView from '@/views/BuildingView'


const routes = [
  {
    name: 'mainview',
    path: '/',
    component: (() => import('@/views/MainView.vue')),
    children: [
      {
        name: 'organization',
        path: '/organization',
        component: OrganizationView
      },
      {
        name: 'address',
        path: '/address',
        component: AddressView
      },
      {
        name: 'building',
        path: '/building',
        component: BuildingView
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,

})




export default router
