<script setup>
import { ref } from 'vue';
import Profile from '../Profile.vue'
// import Options from '../components/Options.vue'

const isOpen = ref(true)
</script>

<template>
  <input type="checkbox" v-model="isOpen"> {{ isOpen }}
  <Profile v-if="isOpen">
    <h1>GitHub User Data</h1>

    <template v-slot:footer>
      <footer>
        Desenvolvido por <a href="https://github.com/isaacpontes" target="_blank">Isaac Pontes</a>
      </footer>
    </template>
  </Profile>
</template>