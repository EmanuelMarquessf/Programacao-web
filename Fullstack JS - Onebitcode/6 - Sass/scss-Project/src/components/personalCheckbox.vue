<script setup>
  import {defineProps} from "vue";

  const props = defineProps({ 
    
  })
</script>

<template>
  <label for="">
    <input type="checkbox"> 
    <span><slot></slot></span>
  </label>
</template>

<style lang="scss">
$primaryColor : #141124;
$secondaryColor: #2b2845;
$terciaryColor: #19afd0;

$textPrimary: #ebf0fd;
$textSecondary: #8186a3;
  label{
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }
  a{
    color: $terciaryColor;
  }
</style>