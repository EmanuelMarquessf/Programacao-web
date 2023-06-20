<script setup>
import CompositionApi from './components/Profile.vue';
import {ref} from 'vue'
const isOpen = ref(true);
</script>

<template>
  Vizualizar?
  <input type="checkbox" v-model="isOpen">{{ isOpen }}
  <CompositionApi v-if="isOpen == true"/>
</template>

<style>
#app{
  display: grid;
  place-content: center;
  min-height: 100vh;
}
button{
  font-size: 2rem;
}
</style>