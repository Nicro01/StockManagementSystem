<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import './index.css'
</script>

<template>
  <RouterView />
  <NavBar />
</template>

<style>
body {
  user-select: none;
  overflow-x: hidden;
}
</style>
