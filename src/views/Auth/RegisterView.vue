<template>
  <div class="relative py-3 sm:max-w-xl sm:mx-auto mt-20">
    <div
      class="absolute inset-0 bg-gradient-to-r from-amber-300 to-amber-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
    ></div>
    <form
      @submit.prevent="register"
      class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20"
    >
      <div class="max-w-md mx-auto">
        <div>
          <h1 class="text-2xl font-semibold">Login</h1>
        </div>
        <div class="divide-y divide-gray-200">
          <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <div class="relative">
              <input
                autocomplete="off"
                id="name"
                name="name"
                type="text"
                v-model="name"
                class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                placeholder="name"
              />
              <label
                for="username"
                class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >Name</label
              >
            </div>
            <div class="relative">
              <input
                autocomplete="off"
                id="username"
                name="username"
                type="text"
                v-model="username"
                class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                placeholder="Username"
              />
              <label
                for="username"
                class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >Username</label
              >
            </div>
            <div class="relative">
              <input
                autocomplete="off"
                id="email"
                name="email"
                type="email"
                v-model="email"
                class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                placeholder="Email@stock.com"
              />
              <label
                for="email"
                class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >Email</label
              >
            </div>
            <div class="relative">
              <input
                autocomplete="off"
                id="password"
                name="password"
                type="password"
                v-model="password"
                class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                placeholder="Password"
              />
              <label
                for="password"
                class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >Password</label
              >
            </div>
            <div class="relative">
              <input
                autocomplete="off"
                id="c_password"
                name="c_password"
                type="c_password"
                v-model="c_password"
                class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                placeholder="Password"
              />
              <label
                for="password"
                class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >Confirm Password</label
              >
            </div>
            <label for="roles" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Select an option</label
            >
            <select
              id="roles"
              name="roles"
              v-model="selectedRole"
              class="bg-gray-50 border border-gray-300 text-gray-500 fomt-semibold text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option disabled value="">Please select a role</option>
              <option v-for="role in roles" :key="role.role" :value="role.role">
                {{ role.role }}
              </option>
            </select>

            <div class="relative">
              <button class="bg-amber-500 text-white rounded-md px-4 py-1">Enter</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { useAuthStore } from '@/stores/AuthStore.js'
import axios from 'axios'
export default {
  setup() {
    const authStore = useAuthStore()
    return { authStore }
  },
  data() {
    return {
      name: '',
      username: '',
      password: '',
      email: '',
      status: 1,
      role: '',
      roles: [],
      c_password: '',
      token: (axios.defaults.headers.common['Authorization'] = `${localStorage.getItem(
        'userToken'
      )}`)
    }
  },
  mounted() {
    axios
      .get('https://tmktlondrina.com.br/api/roles')
      .then((response) => {
        console.log(response.data)
        this.roles = response.data
      })
      .catch((error) => {
        console.error(error)
      })
  },

  methods: {
    async register() {
      await this.authStore.register({
        name: this.name,
        username: this.username,
        email: this.email,
        password: this.password,
        status: this.status,
        role: this.selectedRole,
        token: this.token
      })
      this.$router.push('/users')
    }
  }
}
</script>
