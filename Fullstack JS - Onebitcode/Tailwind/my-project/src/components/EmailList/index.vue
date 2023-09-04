<script setup>
import emails from '../../emails.json'
import EmailListItem from './EmailListItem.vue';
import Avatar from './Avatar.vue';

import { ref, defineEmits, watch } from 'vue';

const emit = defineEmits(['selectEmail'])
let email = ref();
let selectEmail = ref()
let emailBody = ref()

watch(selectEmail, () => {
  emit('selectEmail', selectEmail.value)
  console.log(selectEmail.value)
})

function handleEmailSelection(email) {
  selectEmail.value = email;
}
</script>

<template>
  <div class="relative overflow-y-scroll grow">
    <EmailListItem v-for="email in emails" @click="selectEmail = email" :key="email.id">
      <Avatar :letter="email.from[0].toUpperCase()"></Avatar>
      <article class="flex items-center gap-4 [&+article]:mt-2 p-2 
        hover:cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-900 
        rounded-lg transition-colors" 
        @click="handleEmailSelection(email)">
          <div class="grow shrink basis-40">
            <strong>{{email.subject}}</strong>
            <p>{{email.body.length > 50 ? email.body.slice(0, 50) + '...' : email.body }}</p>
          </div>
      </article>
    </EmailListItem>
  </div>
</template>