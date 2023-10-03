import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '@/views/AuthView.vue'
import LoginForm from '@/components/LoginForm.vue'
import RegisterForm from '@/components/RegisterForm.vue'
import ProfileView from '@/views/ProfileView.vue'
import UserPosts from '@/components/UserPosts.vue'
import { getUser } from '@/firebase/userAuthState'

const routes = [
  {
    name: 'authview',
    path: '/auth',
    component: AuthView,
    redirect: '/login',
    children: [
      {
        name: 'loginform',
        path: '/login',
        component: LoginForm
      },
      {
        name: 'registerform',
        path: '/register',
        component: RegisterForm
      }
    ]
  },
  {
    name: 'mainview',
    path: '/',
    component: (() => import('@/views/MainView.vue')),
    redirect: '/posts',
    meta: {
      requiredAuth: true
    },
    children: [
      {
        name: 'userposts',
        path: '/posts',
        component: UserPosts,
      },
      {
        name: 'profileview',
        path: '/profile',
        component: ProfileView
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,

})


router.beforeEach(async (to) => {
  const user = await getUser()
  if (to.meta.requiredAuth && !user) {
    return '/auth'
  }
})

export default router
