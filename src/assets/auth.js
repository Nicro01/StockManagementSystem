import { useAuthStore } from '../stores/AuthStore.js'

export default {
  name: 'HomeView',
  computed: {
    isAuthenticated() {
      return useAuthStore().isAuthenticated
    },
    authUser() {
      return useAuthStore().user
    }
  },
  created() {
    useAuthStore()
  }
}
