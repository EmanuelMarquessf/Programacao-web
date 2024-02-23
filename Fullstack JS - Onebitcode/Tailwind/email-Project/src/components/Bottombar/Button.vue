<script setup>
  import {ref} from 'vue';
</script>
<template>
  <button
      class="flex-1 p-2 mb-0.5 rounded-lg shadow
      text-gray-900 dark:text-gray-50
      bg-gray-900
      focus:bg-gray-200 dark:focus:bg-primary-600
      hover:bg-gray-200 dark:hover:bg-primary-600
      "
    >
    <slot></slot>
    </button>
</template>