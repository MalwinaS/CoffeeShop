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
  <p class='products-dash__title'>Produkty naszej palarnii</p>
  <div class="products-dash__items">
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>

</section>
</template>

<style scoped lang="scss">
.products-dash {
    &__title {
    text-align: left;
    font-size: $font-size-small;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 10px;
  }
    &__items {
    display: grid;
    grid-auto-rows: auto;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    overflow: hidden;
    align-items: center;
  }
}

</style>
