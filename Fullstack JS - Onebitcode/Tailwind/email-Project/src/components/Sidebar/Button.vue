<script setup>
  import {ref} from 'vue';
</script>
<template>
  <button
      class="py-2 px-4 w-full text-left rounded-lg transition-colors 
      focus:bg-zinc-50 dark:focus:bg-zinc-900
      focus:bg-zinc-50 dark:focus:bg-zinc-900"
    >
    <slot></slot>
    </button>
</template>