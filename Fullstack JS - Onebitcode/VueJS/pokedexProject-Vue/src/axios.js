import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0',
  timeout: 5000,
  headers:{
    'Content-Type': 'application/json'
  },
});

export default api;