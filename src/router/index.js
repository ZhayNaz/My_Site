import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/HomePage.vue'
import About from '@/components/AboutPage.vue'
import Contact from '@/components/ContactPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
