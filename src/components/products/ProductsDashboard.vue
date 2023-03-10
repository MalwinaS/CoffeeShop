<script setup>
import { ref, onMounted } from 'vue'

import ProductCard from '@/components/products/ProductCard.vue'
import EventService from '@/services/EventService.js'

const products = ref(null)

onMounted(() => {
  EventService.getProducts()
  .then((response) => {
    products.value = response.data
  })
  .catch((error) => {
    console.log(error)
  })
})

</script>

<template>
 <section class="products-dash grid-container">
  <div class="products-dash__items">
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>

</section>
</template>

<style scoped lang="scss">
.products-dash {
    &__items {
    display: grid;
    grid-auto-rows: auto;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    overflow: hidden;
    align-items: center;
  }
}

</style>
