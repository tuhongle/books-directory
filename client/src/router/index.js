import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: 'accounts/login',
          name: 'login',
          component: () => import('../views/LoginView.vue')
        },
        {
          path: 'accounts/sign-up',
          name: 'signup',
          component: () => import('../views/SignUpView.vue')
        }
      ]
    },
    {
      path: '/post',
      name: 'post',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PostBookView.vue')
    },
    {
      path: '/book/:id',
      name: 'SingleBook',
      component: () => import('../views/SingleBookView.vue'),
      props: true
    }
  ]
})

export default router
