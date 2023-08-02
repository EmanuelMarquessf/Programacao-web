<script setup>
  import { onMounted } from 'vue';

  // onMounted(() =>{
  //   console.log(this.$slots)
  // })
</script>

<template>
  <h1>Teste Slot</h1>
  <slot></slot>
  <h1><slot name="title" v-if="$slots.title"></slot></h1>
  <h2><slot name="description"></slot></h2>

</template>