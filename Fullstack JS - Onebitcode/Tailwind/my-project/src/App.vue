<script setup>
import Header from './components/Header/index.vue'
import Container from './components/container.vue'
import Sidebar from './components/Sidebar/index.vue'
import Bottombar from './components/Bottombar/index.vue'
</script>

<template>
  <Header></Header>
  <Container>
    <div class="flex flex-col md:flex-row gap-2 xl:gap-4 h-full relative">
      <Sidebar></Sidebar>
      <div class="h-full"></div>
      <Bottombar></Bottombar>
    </div>
  </Container>
</template>

<style scoped>
</style>
