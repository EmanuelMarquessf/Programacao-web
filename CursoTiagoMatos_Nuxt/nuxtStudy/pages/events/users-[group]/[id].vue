<script setup>
  const route = useRoute();

  console.log(route.params)
</script>

<template>
  <div>
    {{ $route.params.group }}
    <br>
    {{ $route.params.id }}
  </div>
</template>