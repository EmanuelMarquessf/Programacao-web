<template>
  <AppProducts />

  <input v-model="client.name" type="text">
  <input v-model="client.lastName" type="text">
  <input v-model="client.email" type="text">

  <p>{{client.name}}</p>
  <button @click="updateUser(client)">
    Atualizar
  </button>
  {{ $store.state.client.name }}
  {{ $store.state.client.lastName }}


</template>

<script>
import AppProducts from './components/products/appProducts.vue'


export default {
  name: 'App',
  components: {
    AppProducts
  },

  data() {
    return {
      inputNome: '',
      client: {
        name: '',
        lastName: '',
        email: '',
      }
    }
  },
  methods: {
    updateUser(userUpdate){
    //   const newUser = {
    //   first_name: 'Emanuel',
    //   last_name: 'Fonseca',
    //   email: 'emanuel@gmail.com'
    // }
    this.$store.commit('storeUser', userUpdate)
    }
  },

  created(){
    
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
