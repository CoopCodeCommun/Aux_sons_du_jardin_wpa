// gère les routes(pages)
import {createRouter, createWebHistory} from 'vue-router'
import Accueil from '@/views/Accueil.vue'
import Page1 from '@/views/Page1.vue'
import Page2 from '@/views/Page2.vue'
import Page3 from '@/views/Page3.vue'
import Page4 from '@/views/Page4.vue'
import Page5 from '@/views/Page5.vue'
const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil,
    alias: '/index.html'
  },
  {
    path: '/PageTest',
    name: 'PageTest',
    component: () => import(/* webpackChunkName: "PageTest" */ '../views/PageTest.vue')
  },
  {
    path: '/Page1',
    name: 'Page1',
    component: Page1
  },
  {
    path: '/Page2',
    name: 'Page2',
    component: Page2
  },
  {
    path: '/Page3',
    name: 'Page3',
    component: Page3
  },
  {
    path: '/Page4',
    name: 'Page4',
    component: Page4
  },
  {
    path: '/Page5',
    name: 'Page5',
    component: Page5
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return {
      top: 0,
      behavior: 'smooth'
    }
  }
})

export default router
