<template>
  <div
    class="balao -top-14 z-20 rounded-lg bg-indigo-100 after:border-transparent after:border-t-indigo-100 text-gray-500 text-sm p-3 absolute"
  >
    {{ mensagem }}
  </div>
</template>

<script>
export default {
  props: {
    mensagem: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.balao::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
}
</style>
