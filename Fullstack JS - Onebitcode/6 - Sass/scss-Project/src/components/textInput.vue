<script setup>
  import {defineProps} from "vue";

  const props = defineProps({ 
    placeholder: String,
    type: String,
  })
</script>

<template>
  <label>
    <slot></slot>
    <input :type="props.type" :placeholder="props.placeholder">
  </label>
</template>

<style lang="scss" scoped>
  label{
    display: flex;
    flex-direction: column;
    font-size: 20px;
    font-family:'Roboto', sans-serif;
    gap:0.5rem;
    input{
      background-color: $secondaryColor;
      padding: 1rem 0.5rem;
      border: 0px;
      border-radius: 1px;
      @include text-style($textPrimary, 15px,'Roboto', 500, normal)
    }
  }
</style>