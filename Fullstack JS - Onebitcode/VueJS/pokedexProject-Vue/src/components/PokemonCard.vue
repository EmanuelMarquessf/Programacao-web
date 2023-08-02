<script>
  import api from '@/axios.js';

  export default{
    mounted(){
      api.get('/endpoint')
      .then(response => {

      })
      .catch(error => {

      });
    },
  };
</script>

<template>
  
</template>