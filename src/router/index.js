import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Stock from '../views/StockView.vue'
import CreateStock from '../views/StockCreateView.vue'
import EditStock from '../views/StockEditView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/stock',
      name: 'stock',
      component: Stock
    },
    {
      path: '/stock-create',
      name: 'createStock',
      component: CreateStock
    },
    {
      path: '/stock-edit/:id',
      name: 'editStock',
      component: EditStock
    }
  ]
})

export default router
