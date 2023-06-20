<script setup>
import {
  reactive,
  ref,
  computed,
  onMounted,
  onUpdated,
  onUnmounted,
} from "vue";
import UserInfo from "./userInfo.vue";
import Repository from "./Repository.vue";
import Form from "./Form.vue";

const searchInput = ref("");

const state = reactive({
  name: "",
  count: 0,
  login: "",
  bio: "",
  company: "",
  base_experience: "",
  repos: [],
});
function incrementCount() {
  state.count++;
}

async function handleSubmit(username) {
  const res = await fetch(`https://api.github.com/users/${username}`);
  const { login, name, bio, company, avatar_url } = await res.json();

  state.login = login;
  state.name = name;
  state.bio = bio;
  state.company = company;
  state.avatar_url = avatar_url;

  fetchUserRepositories(login);
}

async function fetchUserRepositories(username) {
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  const repos = await res.json();

  state.repos = repos;
}

const reposCountMessage = computed(() => {
  return state.repos.length > 0
    ? `${state.name} possui ${state.repos.length} repositórios públicos.`
    : `${state.name} não possui nenhum repositório público.`;
});

onMounted(() => {
  console.log("O componente foi montado");
});

onUpdated(() => {
  console.log("O componente foi atualizado");
});

onUnmounted(() => {
  console.log("O componente foi desmontado");
});
</script>

<template>
  <div id="app">
    <h1>Ola {{ state.name }}!</h1>
    <p>Pesquisando por https://api.github.com/users/{{ searchInput }}</p>
    <!-- <button v-on:click="incrementCount">Contador: {{ state.count }}</button> -->

    <h2>GitHub User Data</h2>

    <Form @form-submit="handleSubmit" v-model="searchInput" />

    <UserInfo
      v-if="state.login != ''"
      :login="state.login"
      :name="state.name"
      :company="state.company"
      :bio="state.bio"
      :avatar_url="state.avatar_url"
    />

    <section v-if="state.repos.length > 0">
      <h2>{{ reposCountMessage }}</h2>
      <Repository
        v-for="repo of state.repos"
        :full_name="repo.full_name"
        :description="repo.description"
        :html_Url="repo.html_url"
      />
    </section>
  </div>
</template>

<style scoped>
img {
  border: 1px solid #e5e5e5;
  border-radius: 999px;
  display: block;
  margin: 1rem auto;
  width: 8rem;
  height: 8rem;
}

h1,
h2 {
  color: #f64348;
  margin: 1rem auto 0.25rem;
}

h3 {
  margin: 1rem auto 0.25rem;
}

span {
  display: block;
  margin: 1rem auto;
}

input,
button {
  max-width: 20rem;
  padding: 0.5rem;
}

input {
  background-color: #1c1a1d;
  border: 1px solid #f64348;
  border-radius: 0.25rem;
  color: #e5e5e5;
  margin: 1rem 1rem 1rem 0;
}

button {
  background-color: #f64348;
  border: unset;
  border-radius: 0.25rem;
  color: #1c1a1d;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
}

button:hover {
  cursor: pointer;
  filter: brightness(0.95);
}

a {
  color: #f64348;
}
</style>
