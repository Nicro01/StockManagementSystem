<template>
  <section class="pt-24 bg-white">
    <form
      @submit.prevent="login"
      class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20"
    >
      <div class="max-w-md mx-auto">
        <div>
          <h1 class="text-2xl font-semibold">Create new Role</h1>
        </div>
        <div class="divide-y divide-gray-200">
          <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <div class="relative">
              <input
                autocomplete="off"
                id="roleName"
                name="roleName"
                type="text"
                v-model="name"
                class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                placeholder="Role Name"
              />
              <label
                for="email"
                class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >Role Name</label
              >
            </div>

            <div class="relative">
              <button class="bg-amber-500 text-white rounded-md px-4 py-1">Enter</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'CreateRole'
}
</script>
