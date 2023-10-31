import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')) || null
  }),
  getters: {
    isAuthenticated(state) {
      return !!state.user
    }
  },
  actions: {
    async login(userDetails) {
      try {
        const response = await axios.post('http://localhost:5000/login', userDetails)
        if (response.data.token) {
          // Store the token and user in local storage
          localStorage.setItem('userToken', response.data.token)
          localStorage.setItem('user', JSON.stringify(response.data.user))
          // Set the token in the Authorization header
          axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
          this.user = response.data.user
        } else {
          console.error('Login failed')
        }
      } catch (error) {
        console.error(error)
      }
    },
    logout() {
      // Remove the token and user from local storage
      localStorage.removeItem('userToken')
      localStorage.removeItem('user')
      // Remove the Authorization header
      delete axios.defaults.headers.common['Authorization']
      this.user = null
    }
  }
})
