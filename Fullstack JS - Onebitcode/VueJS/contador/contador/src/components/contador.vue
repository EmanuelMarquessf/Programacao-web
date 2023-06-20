<script setup>
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">Você clicou em mim {{ count }} vezes.</button>'
})
</script>

<template>
  <div id="components-demo">
    <button-counter></button-counter>
  </div>
</template>

<style scoped>

</style>
