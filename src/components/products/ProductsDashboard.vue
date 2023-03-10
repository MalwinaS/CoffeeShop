<script>
import { ref, onMounted } from 'vue'
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
  <h1>Products For Good</h1>
  <div class="products">
    <EventCard v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<style scoped>
.products {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

