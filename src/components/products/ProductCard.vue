<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>

<template>
    <div class="product-card">
      <h2>{{ product.name }}</h2>
    </div>

</template>

<style scoped>
.product-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.product-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.product-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
