<script>
import axios from 'axios'

export default {
  name: 'StockView',
  data() {
    return {
      products: [],
      showCart: false // add boolean property to control CartSideBar display
    }
  },
  mounted() {
    axios
      .get('http://localhost:5000/products')
      .then((response) => {
        console.log(response.data)
        this.products = response.data
      })
      .catch((error) => {
        console.error(error)
      })
  },
  methods: {
    deleteProduct(id) {
      axios
        .delete(`http://localhost:5000/products/${id}`)
        .then((response) => {
          console.log(response.data)
          window.location.href = '/stock'
        })
        .catch((error) => {
          console.error(error)
        })
    },
    editProducts(id) {
      window.location.href = '/stock-edit/' + id
    },
    toggleCart() {
      // add method to toggle showCart property
      this.showCart = !this.showCart
    }
  }
}
</script>

<template>
  <div class="w-[70%] mx-auto mt-5 flex flex-col">
    <h2 class="text-center text-[#3e3e3e] text-4xl font-bold mt-5">Products</h2>

    <div class="p-10 mt-5 w-[100%] grid grid-cols-3 gap-12">
      <div v-for="product in products" v-bind:key="product.id" class="relative">
        <div
          v-if="product.status == 0"
          class="absolute z-10 text-red-500 text-6xl font-bold transform rotate-[-50deg] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]"
        >
          DISABLED
        </div>
        <div
          v-bind:class="{ grayscale: product.status == '0' }"
          class="w-70 h-96 bg-amber-300 p-3 flex flex-col gap-1 rounded-3xl self-center my-3 shadow-lg shadow-amber-200"
        >
          <div
            class="duration-500 rounded-2xl h-56 bg-gradient-to-bl from-black via-orange-900 to-indigo-600"
          >
            <img :src="product.photo" alt="" class="object-cover rounded-xl h-full w-full" />
          </div>
          <div class="flex flex-col gap-4 mt-2">
            <div class="flex flex-row justify-between mb-4">
              <div class="flex flex-col max-w-[100px]">
                <span class="text-xl text-gray-700 truncate font-bold" id="productName">{{
                  product.name
                }}</span>
                <p class="text-xs text-gray-500">ID: {{ product.id }}</p>
              </div>
              <div class="flex flex-col max-w-[100px] text-end">
                <span class="font-bold text-red-600 text-xm mt-2" id="productValue">{{
                  '$' + product.value
                }}</span>
                <p class="text-xs text-gray-500">{{ product.quantity }} in Stock</p>
              </div>
            </div>
            <div
              v-if="product.status != 0"
              class="flex justify-around items-center bg-slate-100 rounded-xl py-2"
            >
              <button
                :class="{ 'disabled-link': authUser.role != 'admin' }"
                @click="editProducts(product.id)"
                title="Edit"
                class="card-button flex justify-center items-center hover:bg-indigo-200 group cursor-pointer rounded-full duration-200 w-[2.5rem] h-[2.5rem]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  :class="{ 'disabled-link': authUser.role != 'admin' }"
                  class="w-7 h-7 hover:text-indigo-500 text-indigo-400 group-hover:text-indigo-500 duration-200"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </button>
              <button
                :class="{ 'disabled-link': authUser.role != 'admin' }"
                class="card-button flex justify-center items-center hover:bg-red-200 group cursor-pointer rounded-full duration-200 w-[2.5rem] h-[2.5rem]"
                @click="deleteProduct(product.id)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  :class="{ 'disabled-link': authUser.role != 'admin' }"
                  class="w-7 h-7 hover:text-red-500 text-red-400 group-hover:text-red-500 duration-200"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-button:hover {
  width: 2.5em !important;
  height: 2.5em !important;
  border-radius: 50%;
  background: #f1f5f9;
  box-shadow:
    3px 3px 6px #606264,
    -3px -3px 6px #ffffff;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(16rem);
}

.disabled-link {
  pointer-events: none;
  color: #9f9f9f;
}
</style>
