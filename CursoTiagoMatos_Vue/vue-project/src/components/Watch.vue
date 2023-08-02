<script setup>
  import { reactive,ref, computed, watch } from "vue";
  let name = ref('');
  let pageCount = ref('5');  

  watch(name, async(newName) =>{
    console.log(newName)
    teste();
  })

  watch(pageCount, async(newPageCount) =>{
    console.log(newPageCount);
  })

  function teste(){
    console.log('teste')
  }
</script>

<template>
  <input type="text" v-model="name">
  {{ name }}
  <br><br>
  <select v-model="pageCount">
    <option value="5">5</option>
    <option value="10">10</option>
    <option value="15">15</option>
  </select>
  {{ pageCount }}
</template>

<style>
</style>