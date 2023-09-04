<script setup>
  import Avatar from "./Avatar.vue";
</script>

<template>
  <article
    className="
      flex items-center gap-4 [&+li]:mt-1 p-2 
      hover:cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-900
      rounded-lg transition-colors"
  >
    <slot>

    </slot>
  </article>
  
</template>