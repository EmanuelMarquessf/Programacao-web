<script setup>
import { reactive,ref, computed, watch, onMounted } from "vue";

const isHome = true;
const pClass = ['text', 'text-home'];
const titleClass= {'title' : true, 'title-home' : isHome};
const stylePHome= "color: blueviolet;";

const name = ref('');
const sports = ref('');
const newslatter = ref('sim');
const backgroundColor = ref('');
const colors =ref([]);

const user = reactive(
  {
    name: 'John',
    lastName: 'Snow'
  }
)

const users = reactive([
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
    imgAlt: "Cat Picture",
    imgSrc: "http://placekitten.com/150",
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
    imgAlt: "Cat Picture",
    imgSrc: "http://placekitten.com/150",
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
]);

//Computed property - Guarda as informações em cash
const fullName = computed(() =>{
  return `${user.name} ${user.lastName}`
})

const unCompleted = computed(() =>{
  return users.filter(users => !users.completed)
})

const completed = computed(() =>{
  console.log('teste')
  return users.filter(users => users.completed)
})

watch(name, async (newName) => {
  console.log(newName)
})

function onMouseClick($ev){
  console.log("Mouse click", $ev)
}
function onMouseOver($ev){
  console.log("Mouse over", $ev)
}
function onMouseOut($ev){
  console.log("Mouse out", $ev)
}
function onSubmit($ev){
  console.log("submit", $ev)
}
function onKeyUp($ev){
  console.log("Key Up", $ev)
}

onMounted(() =>{
  window.addEventListener('resize', resize)
})
function resize($evt){
  console.log($evt)
}
</script>

<template>
  <header>
    {{ fullName }}
    <h1 :class="titleClass">Curso VUE</h1>
    <p :class="pClass">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nobis inventore nesciunt recusandae? Dignissimos, similique quisquam facilis veritatis, et labore aliquam soluta laborum commodi rem, a architecto provident eius expedita!</p>
    <p :style="{color : 'aqua'}">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis a iusto omnis quae molestias ab, commodi facere quidem aspernatur, expedita quo recusandae itaque minus error, id quia sit voluptatibus quam.</p>
    
    <h2>Livros Incompletos</h2>
    <div v-for="(user, index) in unCompleted" v-bind:key="user.id">
      <p>{{ index }} - {{ user.title }}</p> 
      <img v-if="user.imgSrc" :src="user.imgSrc" :alt="user.imgAlt">
    </div>
<br>
    <h2>Livros completos</h2>
    <div v-for="(user, index) in completed" v-bind:key="user.id">
      <p>{{ index }} - {{ user.title }}</p> 
      <img v-if="user.imgSrc" :src="user.imgSrc" :alt="user.imgAlt">
    </div>
<br>
    <h2>Todos</h2>
    <div v-for="user in users" :key="user.id">
      <p>
        {{ user.title }}
        <input type="checkbox" v-model="user.completed">
      </p> 
    </div>
  </header>
<!--V-Model-->
  <main>
    <br><br>
    <label for="name">Nome</label><br>
    <input name="name" type="text" v-model="name"><br>
    {{ name }}

    <div>
      <label for="">Sports</label>
      <select v-model="sports">
        <option value="">Escolha</option>
        <option value="Futebol">Futebol</option>
        <option value="beisebol">Beisebol</option>
        <option value="basquete">Basquete</option>
      </select>
      {{ sports }}
    </div>
<br><br>
    <div>
      <Label>Newslatter</Label>
        <input type="radio" value="sim" v-model="newslatter">Sim
        <input type="radio" value="não" v-model="newslatter">Não
        <br>
        {{ newslatter }}
    </div>
    <br><br>

    <input type="color" v-model="backgroundColor"> 
    {{ backgroundColor }}
    <br><br>
    <input type="checkbox" v-model="colors" value="amarelo">Amarelo
    <input type="checkbox" v-model="colors" value="verde">Verde

    {{ colors }}

    <!--Eventos-->
    <br><br>
    <button @click.once="onMouseClick"> Click</button>
    <button @mouseover="onMouseOver" @mouseout="onMouseOut"> Mouse Over</button>


    <form action="https://google.com" @submit.prevent="onSubmit">
      <input type="text" name="" id="" @keyup.enter="onKeyUp">
      <button type="submit">Enviar</button>
    </form>
    <input type="text" @keyup.enter="onMouseClick">

  </main>
</template>

<style scoped>
header {
  background-color: backgroundColor;
  color: rgb(255, 255, 255);
}
.title{
  color: rgb(251, 0, 0);
}
.title-home{
  color: blue;
}
.text{
  text-align: justify;
  color: green;
}
.text-home{
  color: brown;
}
</style>
