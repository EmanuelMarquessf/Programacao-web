<script setup>
  import {defineProps} from "vue";

  const props = defineProps({ 
    
  })
</script>

<template>
  <label for="">
    <input class="check" type="checkbox"> 
    <span><slot></slot></span>
  </label>
</template>

<style lang="scss" scoped>
$primaryColor : #141124;
$secondaryColor: #2b2845;
$tertiaryColor: #19afd0;

$textPrimary: #ebf0fd;
$textSecondary: #8186a3;
  label{
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    .check{
      max-width: 15px;
      min-width: 15px;
      width: 15px;
    }
    span{
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 14px;
      text-align: justify;
    }
    .linkCheck{
      color: $tertiaryColor;
    }
  }
</style>