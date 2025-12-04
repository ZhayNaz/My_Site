import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/HomePage.vue'
import About from '@/components/AboutPage.vue'
import Contact from '@/components/ContactPage.vue'
import Donate from '@/components/DonatePage.vue'
import Blogs from '@/components/BlogsPage.vue'
import Music from '@/components/MusicPage.vue'

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
  },
  {
    path: '/donate',
    name: 'Donate',
    component: Donate
  },
  {
    path: '/music',
    name: 'Music',
    component: Music
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
