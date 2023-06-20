new Vue({
  el: '#app',
  data: {
    pokemons: []
  },
  mounted() {
    this.fetchPokemons();
  },
  methods: {
    fetchPokemons() {
      axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(response => {
          const results = response.data.results;
          results.forEach(result => {
            axios.get(result.url)
              .then(pokemonResponse => {
                const pokemon = {
                  id: pokemonResponse.data.id,
                  name: result.name,
                  image: pokemonResponse.data.sprites.front_default,
                  type: pokemonResponse.data.types[0].type.name
                };
                this.pokemons.push(pokemon);
              })
              .catch(error => {
                console.log(error);
              });
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
});