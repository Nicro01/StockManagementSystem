<template>
  <div class="heading text-center font-bold text-2xl m-8 text-gray-800 bg-white">New Product</div>
  <div
    class="editor mx-auto flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-3xl"
  >
    <div class="flex gap-5 mb-8">
      <form @submit.prevent="updateProduct" class="flex flex-col w-10/12">
        <input
          class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          spellcheck="false"
          v-model="name"
          placeholder="Product"
          type="text"
        />
        <textarea
          class="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
          spellcheck="false"
          v-model="description"
          placeholder="Describe everything about this product here"
        ></textarea>
        <input
          class="title bg-gray-100 border border-gray-300 p-2 mt-4 mb-4 outline-none"
          spellcheck="false"
          v-model="value"
          placeholder="R$ 9.99"
          type="number"
          step="0.01"
        />
        <input
          class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          spellcheck="false"
          v-model="quantity"
          placeholder="Quantity"
          type="number"
          step="1"
        />
        <button
          type="submit"
          class="btn border py-2 px-4 font-semibold cursor-pointer text-white bg-amber-500 hover:bg-amber-600 duration-100"
        >
          Update
        </button>
      </form>

      <div class="w-8/12 flex flex-col justify-between mb-4">
        <!-- Input Image -->
        <div class="icons flex">
          <input
            type="url"
            name="image"
            placeholder="Photo URL"
            class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none w-full"
            v-model="photo"
            @change="previewImage"
          />
        </div>

        <!-- Preview image here -->

        <div
          class="w-60 h-80 bg-amber-300 p-3 flex flex-col gap-1 rounded-3xl self-center my-3 shadow-lg shadow-amber-200"
        >
          <div
            id="preview"
            class="duration-500 rounded-xl h-48 bg-gradient-to-bl from-black via-orange-900 to-indigo-600"
          ></div>
          <div class="flex flex-col gap-4 mt-2">
            <div class="flex flex-row justify-between">
              <div class="flex flex-col max-w-[100px]">
                <span v-if="name == ''" class="text-lg text-gray-700 font-bold" id="productName"
                  >Name</span
                >
                <span v-else class="text-lg text-gray-700 truncate font-bold" id="productName">{{
                  name
                }}</span>
                <p class="text-xs text-gray-400">ID: {{ this.$route.params.id }}</p>
              </div>
              <div class="flex flex-col max-w-[100px] text-end">
                <span class="font-bold text-red-600 text-xm mt-2" id="productValue">{{
                  '$' + value
                }}</span>
                <p class="text-xs text-gray-500">{{ quantity }} in Stock</p>
              </div>
            </div>
            <div class="flex justify-around bg-slate-100 rounded-xl py-2">
              <button
                title="Edit"
                class="card-button flex justify-center items-center hover:bg-indigo-200 group cursor-pointer rounded-full duration-200 w-[2rem] h-[2rem]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 hover:text-indigo-500 text-indigo-400 group-hover:text-indigo-500 duration-200"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </button>
              <button
                class="card-button flex justify-center items-center hover:bg-red-200 group cursor-pointer rounded-full duration-200 w-[2rem] h-[2rem]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 hover:text-red-500 text-red-400 group-hover:text-red-500 duration-200"
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

<script>
import axios from 'axios'

export default {
  name: 'StockEditView',
  data() {
    return {
      name: '',
      value: '',
      description: '',
      quantity: '',
      photo: ''
    }
  },
  async created() {
    const productId = this.$route.params.id
    const response = await axios.get(`https://tmktlondrina.com.br/api/products/${productId}`)
    const product = response.data
    this.name = product.name
    this.description = product.description
    this.value = product.price.toString()
    this.quantity = product.quantity.toString()
    this.photo = product.image
    const previewContainer = document.getElementById('preview')
    previewContainer.innerHTML = ''
    const image = new Image()
    image.src = this.photo
    image.classList.add('object-cover', 'rounded-xl', 'h-full', 'w-full')
    previewContainer.appendChild(image)
  },
  methods: {
    async updateProduct() {
      const productId = this.$route.params.id
      const response = await axios.put(`https://tmktlondrina.com.br/api/products/${productId}`, {
        name: this.name,
        description: this.description,
        price: parseFloat(this.value),
        quantity: parseInt(this.quantity),
        image: this.photo
      })
      console.log(response.data)
      window.location.href = '/stock'
    },
    previewImage() {
      const previewContainer = document.getElementById('preview')
      previewContainer.innerHTML = ''
      const image = new Image()
      image.src = this.photo
      image.classList.add('object-cover', 'rounded-xl', 'h-full', 'w-full')
      previewContainer.appendChild(image)
    }
  }
}
</script>
