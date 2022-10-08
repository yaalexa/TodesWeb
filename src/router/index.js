import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Registro from '../views/Registro.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Admin/Dashboard.vue'

import CrearEventos from '../views/Admin/Eventos/CrearEventos.vue'
import CrearNoticias from '../views/Admin/Noticias/CrearNoticias.vue'

import EditarEventos from '../views/Admin/Eventos/EditarEventos.vue'
import EditarNoticias from '../views/Admin/Noticias/EditarNoticias.vue'

import MostrarEventos from '../views/Admin/Eventos/MostrarEventos.vue'
import MostrarIncidencias from '../views/Admin/Incidencias/MostrarIncidencias'
import MostrarNoticias from '../views/Admin/Noticias/MostrarNoticias.vue'


Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Registro',
    name: 'Registro',
    component: Registro
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard
  },

  {
    path: '/CrearEventos',
    name: 'CrearEventos',
    component: CrearEventos
  },
  {
    path: '/CrearNoticias',
    name: 'CrearNoticias',
    component: CrearNoticias
  },

  {
    path: '/EditarEventos',
    name: 'EditarEventos',
    component: EditarEventos
  },
  {
    path: '/EditarNoticias',
    name: 'EditarNoticias',
    component: EditarNoticias
  },

  {
    path: '/MostrarIncidencias',
    name: 'MostrarIncidencias',
    component: MostrarIncidencias
  },
  {
    path: '/MostrarNoticias',
    name: 'MostrarNoticias',
    component: MostrarNoticias
  },
  {
    path: '/MostrarEventos',
    name: 'MostrarEventos',
    component: MostrarEventos
  },
 
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
