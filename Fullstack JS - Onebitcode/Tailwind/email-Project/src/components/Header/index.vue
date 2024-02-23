<script setup>
import Logo from './logo.vue'
import SearchBar from './searchBar.vue'
import Avatar from './avatar.vue'


</script>
<template>
  <header class="px-4 xl:px-6 h-16 lg:h-20 flex items-center justify-between gap-6 md:gap-16 xl:gap-32 bg-gray-100 dark:bg-gray-800">
    <Logo></Logo>
    <SearchBar></SearchBar>
    <Avatar></Avatar>
  </header>
</template>