<script setup>
import Login from "../src/pages/login.vue";
import { onBeforeMount, ref } from "vue";

const version = ref(null);
const champArray = ref(null)

async function getVersion() {
  const url = `https://ddragon.leagueoflegends.com/api/versions.json`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.error('Ocorreu um erro:', error);
  }
}

async function getLolChampions(){
  
    
  }

onBeforeMount(async () => {
  version.value = await getVersion();
  
  const url = `https://ddragon.leagueoflegends.com/cdn/${version.value}/data/pt_BR/champion.json`
  try{
    const response = await fetch(url);
    const data = await response.json();
    champArray.value =  {
      name: data.data.Aatrox.name,
   }
    console.log(champArray)

  } catch(error) {
    console.error('Ocorreu um erro:', error);
  }
});


</script>

<template>
  <Login></Login>
</template>
<style lang="scss">
$primaryColor: #141124;
$secondaryColor: #2b2845;
$tertiaryColor: #19afd0;
$textPrimary: #ebf0fd;
$textSecondary: #8186a3;
</style>
