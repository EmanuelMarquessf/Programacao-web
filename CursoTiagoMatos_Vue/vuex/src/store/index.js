import { createStore } from 'vuex'

export default createStore({
  state: { //estado - onde guarda os dados
    client:{
      name: 'john',
      lastName: 'Snow',
      email: 'john@snow.com'
    },
    products: [
      {
        id: 1,
        name: 'bola',
        price: 100,
      },
      {
        id: 2,
        name: 'Chuteira',
        price: 200,
      },
      {
        id: 3,
        name: 'Meiao',
        price: 50,
      },

    ],
    cart: [],
  },
  getters: {
    total(state){
      return state.cart.reduce((total, item) => total += item.price, 0)
    }
  },

  mutations: {// usado para fazer mudanças nos dados
    storeUser(state, data){
      state.client = data
    },

    addProduct(state, data){
      state.cart.push(data)
    },

    removeProduct(state, id){
      const idx = state.cart.findIndex(o => o.id === id)
      state.cart.splice(idx, 1)
    },

  },
  actions: {
  },
})
