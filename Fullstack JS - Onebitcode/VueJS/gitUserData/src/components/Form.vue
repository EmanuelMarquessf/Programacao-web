<script setup>
import {ref} from 'vue'
//import { searchHistory } from '../stores/searchHistory'

  const emit = defineEmits(['formSubmit']);
  const searchInput = ref('')
  const searchHistory = reactive({
    users: []
  })

  function handleSubmit(ev) {
  ev.preventDefault()
  searchHistory.users.unshift(searchInput.value)
  emit('formSubmit', searchInput.value)
}

  function showSearchHistory() {
  alert(`Histórico de Pesquisa:\n${searchHistory.users.join('\n')}`)
}
</script>

<template>
  <form @submit="handleSubmit">
    <input
      type="text"
      v-model="searchInput"
      @input="$emit('update:modelValue', $event.target.value)">
      <button type="submit">Carregar Usuário</button>
      <button type="button" @click="showSearchHistory">Ver Histórico</button>
  </form>
</template>
