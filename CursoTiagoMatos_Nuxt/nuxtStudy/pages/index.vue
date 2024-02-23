<script setup>
  const { sayHello } = useUtils();
  sayHello();

  const { $sayHello } = useNuxtApp();
  
  $sayHello("Call Plugin Function")

  definePageMeta({
    middleware : "auth"
  });
</script>
<template>
  <div>
    Index page
    <Alert></Alert>
    <IconsAirplane></IconsAirplane>
    <img src="../assets/favicon.ico" alt="">
  </div>
</template>