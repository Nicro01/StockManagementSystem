<template>
  <header>
    <div class="wrapper bg-amber-200 w-full py-10 px-10 text-xl font-semibold flex justify-between">
      <h1 class="text-4xl font-bold">Stock w/ <span class="text-[#16a34a]">Vue</span></h1>
      <nav class="flex gap-5">
        <RouterLink class="hover:underline active:underline" to="/">Home</RouterLink>
        <RouterLink class="hover:underline active:underline" to="/stock">Stock</RouterLink>
        <RouterLink class="hover:underline active:underline" to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
</template>
