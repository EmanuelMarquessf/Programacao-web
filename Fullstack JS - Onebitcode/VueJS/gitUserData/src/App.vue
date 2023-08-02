<script setup>

</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/Search">Search User</RouterLink>
  </nav>
  <RouterView></RouterView>
</template>

<style>
#app{
  display: grid;
  place-content: center;
  min-height: 100vh;
}
button{
  font-size: 2rem;
}
#app {
  font-family: 'Ubuntu', sans-serif;
  min-height: 100vh;
  max-width: 40rem;
  margin: 0 auto;
  text-align: center;
}
h1 {
  color: #f64348;
  margin: 1rem auto;
}
footer {
  height: 3rem;
  margin-top: 2rem;
  padding: 1rem 0;
}
a {
  color: #f64348;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
}
a + a {
  margin-left: 1rem;
}
a:hover {
  cursor: pointer;
  filter: brightness(0.9);
}
nav {
  border-bottom: 1px solid #fff;
  padding: 1rem 0;
  margin-bottom: 1rem;
}
</style>