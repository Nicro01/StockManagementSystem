<script>
export default {
  data() {
    return {
      products: []
    }
  },
  mounted() {
    // Fetch data from database and set it to items array
    // For example, using axios:
    axios.get('http://localhost:5000/products').then((response) => {
      this.products = response.data
    })
  }
}
</script>

<template>
  <table class="w-full whitespace-nowrap" id="tbl_exporttable_to_xls">
    <tbody v-for="product in products" v-bind:key="product.id">
      <tr tabindex="0" class="focus:outline-none h-16 border border-gray-100 rounded">
        <td>
          <div class="ml-5">
            <div class="rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
              <p class="text-base font-medium leading-none text-gray-700 mr-2">#{{ product.id }}</p>
            </div>
          </div>
        </td>
        <td class="">
          <div class="flex items-center pl-5">
            <p class="text-base font-medium cursor-pointer leading-none text-gray-700 mr-2">
              {{ product.name }}
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none "
              class="cursor-pointer"
            >
              <path
                d="M6.66669 9.33342C6.88394 9.55515 7.14325 9.73131 7.42944 9.85156C7.71562 9.97182 8.02293 10.0338 8.33335 10.0338C8.64378 10.0338 8.95108 9.97182 9.23727 9.85156C9.52345 9.73131 9.78277 9.55515 10 9.33342L12.6667 6.66676C13.1087 6.22473 13.357 5.62521 13.357 5.00009C13.357 4.37497 13.1087 3.77545 12.6667 3.33342C12.2247 2.89139 11.6251 2.64307 11 2.64307C10.3749 2.64307 9.77538 2.89139 9.33335 3.33342L9.00002 3.66676"
                stroke="#3B82F6"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M9.33336 6.66665C9.11611 6.44492 8.8568 6.26876 8.57061 6.14851C8.28442 6.02825 7.97712 5.96631 7.66669 5.96631C7.35627 5.96631 7.04897 6.02825 6.76278 6.14851C6.47659 6.26876 6.21728 6.44492 6.00003 6.66665L3.33336 9.33332C2.89133 9.77534 2.64301 10.3749 2.64301 11C2.64301 11.6251 2.89133 12.2246 3.33336 12.6666C3.77539 13.1087 4.37491 13.357 5.00003 13.357C5.62515 13.357 6.22467 13.1087 6.66669 12.6666L7.00003 12.3333"
                stroke="#3B82F6"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
        </td>
        <td class="pl-24">
          <div class="flex items-center">
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
              {{ product.department_name }}
            </p>
          </div>
        </td>

        <td class="pl-5">
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M3.33331 17.4998V6.6665C3.33331 6.00346 3.59671 5.36758 4.06555 4.89874C4.53439 4.4299 5.17027 4.1665 5.83331 4.1665H14.1666C14.8297 4.1665 15.4656 4.4299 15.9344 4.89874C16.4033 5.36758 16.6666 6.00346 16.6666 6.6665V11.6665C16.6666 12.3295 16.4033 12.9654 15.9344 13.4343C15.4656 13.9031 14.8297 14.1665 14.1666 14.1665H6.66665L3.33331 17.4998Z"
                stroke="#52525B"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M10 9.1665V9.17484"
                stroke="#52525B"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M6.66669 9.1665V9.17484"
                stroke="#52525B"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M13.3333 9.1665V9.17484"
                stroke="#52525B"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <p class="text-sm leading-none text-gray-600 ml-2">23</p>
          </div>
        </td>
        <td class="pl-5">
          <div class="flex items-center">
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
                d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
              />
            </svg>

            <p class="text-sm leading-none text-gray-600 ml-2" id="created_at_display">
              {{ product.created_at }}
            </p>
          </div>
        </td>
        <td class="pl-5">
          <div class="flex items-center">
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
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>

            <p class="text-sm leading-none text-gray-600 ml-2">04/07</p>
          </div>
        </td>
        <td class="pl-5">
          <button
            class="py-3 px-3 text-sm focus:outline-none leading-none text-red-700 bg-red-100 rounded"
          >
            Due today at 18:00
          </button>
        </td>
        <td class="pl-4">
          <button
            class="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none"
          >
            View
          </button>
        </td>
        <td>
          <div class="relative px-5 pt-2">
            <button
              class="focus:ring-2 rounded-md focus:outline-none"
              role="button"
              aria-label="option"
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
            <div class="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 hidden">
              <div
                tabindex="0"
                class="focus:outline-none focus:text-amber-600 text-xs w-full hover:bg-amber-700 py-4 px-4 cursor-pointer hover:text-white"
              >
                <p>Edit</p>
              </div>
              <div
                tabindex="0"
                class="focus:outline-none focus:text-amber-600 text-xs w-full hover:bg-amber-700 py-4 px-4 cursor-pointer hover:text-white"
              >
                <p>Delete</p>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
