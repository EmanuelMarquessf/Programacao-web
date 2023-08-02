import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/views/Home.vue'
import Search from './components/views/Search.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/search', component: Search }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router