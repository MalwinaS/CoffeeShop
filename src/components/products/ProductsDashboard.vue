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
  <div class="products-dash__container">
    <p class='products-dash__title'>Produkty naszej palarnii</p>
  <div class="products">
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>
</div>
</section>
</template>

<style scoped lang="scss">
.products-dash {
  display: grid;
  // flex-direction: column;
  align-items: center;
  &__title {
    text-align: left;
    font-size: $font-size-small;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
}

</style>
