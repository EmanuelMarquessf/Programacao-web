const app = Vue.createApp({
  data() {
    return {
      name: `Onebitcode`,
      count: 0,

      login: '',
      bio: '',
      company: '',
      base_experience: '0',
      searchInput: ''
    }
  },
  methods: {
    incrementCount(){
      this.count++
    },
    async fetchGithubUser() {
      const res = await fetch(`https://api.github.com/users/${this.searchInput}`)
      const { login, name, bio, company, avatar_url } = await res.json()

      this.login = login
      this.name = name
      this.bio = bio
      this.company = company
      this.avatar_url = avatar_url
    }
  }
});

app.mount(`#app`);

