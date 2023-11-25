import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Stock from '../views/Stock/StockView.vue'
import CreateStock from '../views/Stock/StockCreateView.vue'
import EditStock from '../views/Stock/StockEditView.vue'
import ListStock from '../views/Stock/StockList.vue'
import UsersView from '../views/User/UserList.vue'
import LoginView from '../views/Auth/LoginView.vue'
import RegisterView from '../views/Auth/RegisterView.vue'
import DepartmentCreate from '../views/Stock/DepartmentCreate.vue'
import { useAuthStore } from '../stores/AuthStore.js'

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
      component: Stock,
      meta: { requiresAuth: true }
    },
    {
      path: '/stock-create',
      name: 'createStock',
      component: CreateStock,
      meta: { requiresAuth: true, requiresRole: 'admin' }
    },
    {
      path: '/stock-edit/:id',
      name: 'editStock',
      component: EditStock,
      meta: { requiresAuth: true, requiresRole: 'admin' }
    },
    {
      path: '/stock-list',
      name: 'listStock',
      component: ListStock,
      meta: { requiresAuth: true }
    },
    {
      path: '/users',
      name: 'UsersView',
      component: UsersView,
      meta: { requiresAuth: true, requiresRole: 'admin' }
    },
    {
      path: '/create/department',
      name: 'DepartmentCreate',
      component: DepartmentCreate,
      meta: { requiresAuth: true, requiresRole: 'admin' }
    },
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView
    },
    {
      path: '/register',
      name: 'RegisterView',
      component: RegisterView,
      meta: { requiresAuth: true, requiresRole: 'admin' }
    },
    {
      path: '/logout',
      name: 'Logout',
      beforeEnter: (to, from, next) => {
        const authStore = useAuthStore()
        authStore.logout()
        next({ name: 'LoginView' })
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const isAuthenticated = authStore.isAuthenticated
  const userRole = authStore.user ? authStore.user.role : ''

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next({ name: 'LoginView' })
    } else if (
      to.matched.some((record) => record.meta.requiresRole && record.meta.requiresRole !== userRole)
    ) {
      next({ name: 'HomeView' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
