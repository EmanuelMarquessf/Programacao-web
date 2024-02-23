<script setup>
import Header from './components/Header/index.vue'
import Container from './components/container.vue'
import Sidebar from './components/Sidebar/index.vue'
import Bottombar from './components/Bottombar/index.vue'
import EmailList from './components/EmailList/index.vue'
import EmailContent from './components/EmailContent/index.vue'


import {ref} from 'vue'

let email = ref('')

function updateSelectedEmail(selectedEmail) {
  email.value = selectedEmail
}

</script>

<template>
  <Header />
  <Container>
    <div class="flex flex-col md:flex-row gap-2 xl:gap-4 h-full relative">
      <Sidebar />
      <EmailList @selectEmail="updateSelectedEmail" />
      <EmailContent />
        <div 
        class=" p-2 md:p-4 absolute lg:relative h-full w-full 
        bg-gray-50 dark:bg-gray-700
        text-gray-900 dark:text-gray-50
          grow-[2] basis-96" v-if="email!= ''"
        >
          <div class="text-2xl font-bold mb-2">{{email.subject}}</div>
          <div class="text-gray-600 dark:text-gray-400">De: {{email.from}}</div>
          <div class="text-gray-600 dark:text-gray-400">Para: teste@gmail.com</div>
          <div class="text-gray-600 dark:text-gray-400">Em: {{email.createdAt}}</div>
          <hr className="my-4" />
          {{email.body}}
        </div>
        <button class="absolute top-2 right-2 px-2 pb-1 rounded bg-red-300 hover:bg-red-400 dark:bg-red-500 dark:hover:bg-red-600 transition-colors" @click="email=''" v-if="email !=''">
          <FiX className="inline sm:mr-1 mb-[1px]" />
          <span className="hidden sm:inline">Fechar</span>
        </button>
      <Bottombar />
    </div>
  </Container>
</template>

<style scoped>
</style>
