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
      text-align: justify;
      @include text-style($textPrimary, 14px,'Roboto', 400, normal)
    }
    .linkCheck{
      color: $tertiaryColor;
    }
  }
</style>