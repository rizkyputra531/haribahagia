import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Services from '../views/Services.vue'
import contoh from '../views/contoh.vue'

import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contoh',
    name: 'contoh',
    component: contoh
  },

  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // {
  //   path: '/services',
  //   name: 'Services',
  //   component: Services
  // },

  {
    path: '/services',
    name: 'Services',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Services.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
