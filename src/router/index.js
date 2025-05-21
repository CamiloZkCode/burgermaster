import { createRouter, createWebHistory } from 'vue-router'
import HomePages from '../views/HomePages.vue'
import Menu from '../views/StoreMenu.vue'
import Contacto from '../views/ContactoPages.vue'

const routes = [
  { path: '/', name: 'Inicio', component: HomePages },
  { path: '/menu', name: 'Menu', component: Menu },
  { path: '/contacto', name: 'Contacto', component: Contacto }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
