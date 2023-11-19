import { createRouter, createWebHistory } from 'vue-router'
import Layout from "@/layouts/index";

const routes =[
  {
    path: '/auth',
    component: () => import('@/pages/Auth/index.vue'),
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: () => import('@/pages/Main'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
