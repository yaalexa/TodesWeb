import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Mostrarcategorias from '../views/Categoria/Mostrar.vue'
import NuevaCategoria from '../views/Categoria/NuevaCategoria.vue'

import login from '../views/login/login.vue'
import registrarse from '../views/login/registrarse.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/login',
    name: 'login',
    component: login
  },

  {
    path: '/registrarse',
    name: 'registrarse',
    component: registrarse
  },

  


  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/Mostrarcategorias',
    name:'Mostrarcategorias',
    component:Mostrarcategorias
  },
  {
    path:'/NuevaCategoria',
    name:'NuevaCategoria',
    component:NuevaCategoria
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
