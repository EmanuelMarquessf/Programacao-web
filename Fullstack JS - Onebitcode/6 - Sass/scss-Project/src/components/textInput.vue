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
$primaryColor : #141124;
$secondaryColor: #2b2845;
$terciaryColor: #19afd0;

$textPrimary: #ebf0fd;
$textSecondary: #8186a3;
  label{
    display: flex;
    flex-direction: column;
    font-size: 20px;
    font-family:Arial, Helvetica, sans-serif;
    gap:0.5rem;
    input{
      background-color: $secondaryColor;
      color: $textPrimary;
      font-size: 15px;
      font-family:Arial, Helvetica, sans-serif;
      padding: 1rem 0.5rem;
      border: 0px;
      border-radius: 1px;
    }
  }
</style>