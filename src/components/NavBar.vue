<template>
  <div class="RouterLink-container w-full flex justify-center items-center fixed bottom-10">
    <div class="bg-amber-300 mx-auto flex gap-12 px-10 py-3 rounded-lg">
      <RouterLink to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 1024 1024"
          stroke-width="0"
          fill="currentColor"
          stroke="currentColor"
          :class="getClass('/')"
        >
          <path
            d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"
          ></path>
        </svg>
      </RouterLink>
      <RouterLink to="/stock" :class="{ 'disabled-link': !isAuthenticated }">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          :class="[getClass('/stock'), { 'disabled-link': !isAuthenticated }]"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
          />
        </svg>
      </RouterLink>
      <RouterLink to="/stock-list" :class="{ 'disabled-link': !isAuthenticated }">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          :class="[getClass('/stock-list'), { 'disabled-link': !isAuthenticated }]"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
      </RouterLink>

      <RouterLink
        to="/stock-create"
        :class="{ 'disabled-link': !isAuthenticated }"
        @click.prevent="showModal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          :class="[getClass('/stock-create'), { 'disabled-link': !isAuthenticated }]"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </RouterLink>
      <RouterLink
        to="/users"
        :class="{ 'disabled-link': !isAuthenticated }"
        @click.prevent="showModal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          :class="[getClass('/users'), { 'disabled-link': !isAuthenticated }]"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
          />
        </svg>
      </RouterLink>
      <Logout :class="[getClass('/leave'), { 'disabled-logout': !isAuthenticated }]" />
    </div>
  </div>
  <div
    v-if="isModalVisible && authUser.role !== 'admin'"
    class="absolute w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center gap-0 left-0 top-0"
  >
    <div v-if="showModal" class="rounded-md w-30 h-30 mx-[30%] bg-white">
      <div class="p-6 text-xl text-center font-bold text-red-400">&#9888; Alert &#9888;</div>

      <div class="p-6 mb-5">
        The page you are trying to access is only available to admin users.
      </div>

      <div class="p-6 flex justify-end">
        <button
          @click="this.isModalVisible = false"
          class="bg-red-400 hover:bg-red-500 focus:outline-none w-full py-2 rounded-md text-white duration-500 ease-in-out"
        >
          Close Modal
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '../stores/AuthStore.js'
import Logout from './Logout.vue'

export default {
  data() {
    return {
      isModalVisible: false
    }
  },
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
  },
  methods: {
    getClass(path) {
      return {
        'w-6 h-6 font-bold text-[#8635FC] hover:translate-y-[-2px] duration-200':
          this.$route.path === path,
        'w-6 h-6 font-bold text-white hover:text-[#8635FC] hover:translate-y-[-2px] duration-200':
          this.$route.path !== path
      }
    },
    showModal() {
      this.isModalVisible = true
    }
  },
  components: { Logout }
}
</script>

<style scoped>
.disabled-link {
  pointer-events: none;
  color: #9f9f9f;
}

.disabled-logout {
  display: none;
}
</style>
