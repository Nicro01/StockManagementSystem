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
        const response = await axios.post('http://localhost:8000/api/login', userDetails, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        if (response.data.token) {
          localStorage.setItem('userToken', response.data.token)
          localStorage.setItem('user', JSON.stringify(response.data.user))

          axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
          this.user = response.data.user
          console.log(response)
        } else {
          console.error('Login failed')
        }
      } catch (error) {
        console.error(error)
      }
    },
    async register(userDetails) {
      try {
        const response = await axios.post('http://localhost:8000/api/register', userDetails, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        if (response.data.token) {
          localStorage.setItem('userToken', response.data.token)
          localStorage.setItem('user', JSON.stringify(response.data.user))

          axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
          this.user = response.data.user
          console.log(response)
        } else {
          console.error('Registration failed')
        }
      } catch (error) {
        console.error(error)
      }
    },
    logout() {
      localStorage.removeItem('userToken')
      localStorage.removeItem('user')

      delete axios.defaults.headers.common['Authorization']
      this.user = null
    }
  }
})
