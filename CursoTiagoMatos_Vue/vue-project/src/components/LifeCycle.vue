<script setup>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUnmount,
  onUnmounted,
  onUpdated,
} from "vue";

const name = ref("Cristo");
const showHeader = ref(true);

// onBeforeMount(() =>{
//   console.log('BeforeMount')
//   console.log(name);
// });

// onMounted(()=>{
//   console.log('Mounted')
//   console.log(name);
// });

onBeforeUnmount(() =>{
  console.log('BeforeUnmount')
  console.log(this.name);

});

onUnmounted(() => {
  console.log("Unmounted");
});

onUpdated(() => {
  console.log(`jesus`);
});

</script>

<template>
  <div>
    <h1 v-if="showHeader">{{ name }}</h1>
    {{ name }} <br />
    <button @click="showHeader = !showHeader">Deus na minha vida</button>
  </div>
</template>
