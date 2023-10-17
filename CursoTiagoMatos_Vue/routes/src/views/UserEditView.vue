<template>
  <div>
    <h1>id
      {{ $route.query.page }}
      <button @click="login()">
        Login
      </button>
      <p></p>
    </h1>
  </div>
</template>

<script>
  export default {
  methods: {
    login() {
      this.$router.push('/about');
      console.log('logou');
    },
  },
};
</script>