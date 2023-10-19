<template>
  <div class="card">
    {{product.name}} - {{ product.price }}
    <button @click="addProduct()">Adicionar</button>
  </div>
</template>

<script>
export default {
  components: {},
  props: {product: Object},
  methods:{
    addProduct(){
      this.$store.commit('addProduct', this.product)
    },
    removeProduct(){
      this.$store.commit('removeProduct', this.product.id)
    },
  }
}
</script>