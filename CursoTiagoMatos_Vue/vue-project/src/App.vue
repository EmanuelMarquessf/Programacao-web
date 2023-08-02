<script setup>

import TheHeader from './components/TheHeader.vue'
import Watch from './components/watch.vue'
import LifeCycle from './components/LifeCycle.vue';
import Slot from './components/Slot.vue';


const variavel = true;
const showname = true;
const firstName = "John";
const lastName = "Snow";
const acessLevel = 'marketing';
</script>

<template>
  <TheHeader v-show="variavel"/>
  <Watch />
  <div v-show = "showname">
    Nome: {{ firstName }};<br>
    Sobrenome: {{ lastName }};
  </div>

  <div v-if="acessLevel === 'admin'">Admin</div>
  <div v-else-if="acessLevel === 'marketing'">Marketing</div>
  <div v-else>User</div> 

  <LifeCycle></LifeCycle>
  <Slot> 
    <template v-slot:description>Funcionou</template>
    <template v-slot:title>Jesus</template>
    em nenhum slot
  </Slot>
  
</template>

<style>

</style>
