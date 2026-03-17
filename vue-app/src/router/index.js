import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ForfaitsView from '../views/ForfaitsView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/forfaits', name: 'forfaits', component: ForfaitsView },
  { path: '/apropos', name: 'apropos', component: AboutView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router