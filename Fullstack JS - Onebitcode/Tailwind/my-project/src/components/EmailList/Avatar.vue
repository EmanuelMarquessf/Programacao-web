<script setup>
import {ref, defineProps} from 'vue'


 const props = defineProps({
  letter: String,
 })
</script>

<template>
  <div class="rounded-full bg-rose-300 dark:bg-rose-600 
  w-10 h-10 basis-10 grid place-content-center
  ">
    <span class="mb-0.5">
      {{ props.letter }}
    </span>
  </div>
</template>