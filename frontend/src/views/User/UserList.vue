<template>
  <div class="sm:px-6 w-full">
    <div class="px-4 md:px-10 py-4 md:py-7">
      <div class="flex items-center justify-between">
        <p
          tabindex="0"
          class="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800"
        >
          Users Management
        </p>
        <div
          class="py-3 px-4 flex gap-2 items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded"
        >
          <p>{{ authUser.name }}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
      <div class="sm:flex items-center justify-end mb-10">
        <button
          @click="ExportToExcel('xlsx')"
          class="focus:ring-2 focus:ring-offset-2 text-white focus:ring-amber-600 mt-4 sm:mt-0 inline-flex items-center justify-around gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-600 focus:outline-none rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>

          <p class="text-sm font-medium leading-none text-white">Download</p>
        </button>
      </div>
      <div class="mt-7 overflow-x-auto">
        <table class="w-full whitespace-nowrap" id="tbl_exporttable_to_xls">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody v-for="user in users" v-bind:key="user.id">
            <tr tabindex="0" class="focus:outline-none h-16 border border-gray-100 rounded">
              <td>
                <div>
                  <div
                    class="rounded-sm flex flex-shrink-0 justify-center text-center items-center relative"
                  >
                    <p class="font-medium leading-none text-gray-700 mr-2">#{{ user.id }}</p>
                  </div>
                </div>
              </td>
              <td>
                <RouterLink to="/profile" class="flex items-center justify-center">
                  <p class="text-base font-medium cursor-pointer leading-none text-gray-700">
                    {{ user.name }}
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-3.5 h-3.5 ml-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                  </svg>
                </RouterLink>
              </td>
              <td>
                <div class="flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.16667 2.5L16.6667 10C17.0911 10.4745 17.0911 11.1922 16.6667 11.6667L11.6667 16.6667C11.1922 17.0911 10.4745 17.0911 10 16.6667L2.5 9.16667V5.83333C2.5 3.99238 3.99238 2.5 5.83333 2.5H9.16667"
                      stroke="#52525B"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <circle
                      cx="7.50004"
                      cy="7.49967"
                      r="1.66667"
                      stroke="#52525B"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></circle>
                  </svg>
                  <p class="text-sm leading-none text-gray-600 ml-2">
                    {{ user.role }}
                  </p>
                </div>
              </td>

              <td>
                <div class="text-center">
                  <p
                    v-if="user.status === 1"
                    class="sm:max-w-[30%] mx-auto bg-green-100 text-green-800 text-xs font-medium py-0.5 rounded"
                  >
                    Active
                  </p>
                  <p
                    v-else
                    class="sm:max-w-[30%] mx-auto bg-red-100 text-red-800 text-xs font-medium py-0.5 rounded"
                  >
                    Disabled
                  </p>
                </div>
              </td>

              <td>
                <div class="text-center dropdown">
                  <button
                    class="focus:ring-2 rounded-md focus:outline-none"
                    role="button"
                    aria-label="option"
                    @click="toggleModal(user)"
                  >
                    <svg
                      class="dropbtn"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z"
                        stroke="#9CA3AF"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z"
                        stroke="#9CA3AF"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z"
                        stroke="#9CA3AF"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>

                  <div class="dropdown rounded-lg" v-show="user.isModalVisible">
                    <div class="dropdown-content">
                      <div class="dropdown-body rounded-md sm:rounded-none">
                        <button
                          v-if="user.status == 0"
                          @click="updateProductStatus(user.id, 1)"
                          type="submit"
                        >
                          Active
                        </button>
                        <button v-else @click="updateProductStatus(user.id, 0)" type="submit">
                          Disabled
                        </button>
                        <button @click="toggleModal(user)">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UsersView',
  data() {
    return {
      users: []
    }
  },

  mounted() {
    axios
      .get('https://tmktlondrina.com.br/api/users')
      .then((response) => {
        console.log(response.data)
        this.users = response.data
      })
      .catch((error) => {
        console.error(error)
      })
  },
  methods: {
    ExportToExcel(type, fn, dl) {
      var elt = document.getElementById('tbl_exporttable_to_xls')
      var wb = XLSX.utils.table_to_book(elt, { sheet: 'Usuários' })
      return dl
        ? XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' })
        : XLSX.writeFile(wb, fn || 'RelatorioDeUsuarios.' + (type || 'xlsx'))
    },
    toggleModal(product) {
      product.isModalVisible = !product.isModalVisible
    },
    async updateProductStatus(userId, newStatus) {
      const response = await axios.put(`https://tmktlondrina.com.br/api/users/${userId}/status`, {
        status: newStatus
      })
      this.users.forEach((user) => {
        if (user.id === userId) {
          user.status = newStatus
        }
      })
      console.log(response.data)
    }
  }
}
</script>

<style scoped>
.dropdown-content {
  margin-left: 5%;
  position: absolute;
  background-color: #f9f9f9;
  width: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

@media only screen and (max-width: 600px) {
  .dropdown-content {
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    padding: 30%;
    background: #3e3e3e66;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .dropdown-body {
    height: auto;
    background-color: #f1f1f1;
  }
}

.dropdown-content button {
  color: black;
  width: 100%;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content button:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
