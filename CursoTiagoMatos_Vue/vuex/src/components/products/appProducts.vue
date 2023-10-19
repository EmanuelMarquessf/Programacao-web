<template>
  <div>
    Produtos
    <AppProduct 
    v-for="product in $store.state.products"
    :key="product.id"
    :product="product"
    > 
    </AppProduct>
    =========================
    <div>
      <div v-for="product in $store.state.cart" :key="product.id">
        {{ product.name }}
        <button @click="removeProduct(product.id)">Remover</button>
      </div>
    </div>
  </div>
  ===================<br>
  {{$store.getters.total}}<br>
</template>

<script>
import AppProduct from "../products/appProduct.vue";
export default {
  components: {AppProduct},
  methods: {
    removeProduct(selectedProduct){
      this.$store.commit('removeProduct', selectedProduct)
    }
  },
}
</script>