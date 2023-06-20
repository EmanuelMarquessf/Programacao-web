<script setup>
import {ref} from 'vue'

  const emit = defineEmits(['formSubmit']);
  const searchInput = ref('')

  function handleSubmit(ev){
    ev.preventDefault();
    emit('formSubmit', searchInput.value);

  }
</script>

<template>
  <form @submit="handleSubmit">
    <input
      type="text"
      v-model="searchInput"
      @input="$emit('update:modelValue', $event.target.value)">
    <button type="submit">Carregar Usuário</button>
  </form>
</template>
