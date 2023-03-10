<script setup>
import BaseButton from '@/assets/images/buttons/BaseButton.vue'

defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>

<template>
    <section class="product-card">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      <picture class="product-card__image">
          <img src="@/assets/images/product-images/box.png" alt='' loading='lazy'>
        </picture>
      <p class="product-card__name">{{ product.name }}</p>
        <div class="product-card__info">
          <p class="product-card__info__price">{{ product.price }},00 zł</p>
          <BaseButton 
          label='Do koszyka'
          />      
        </div>
      </section>
</template>

<style scoped lang="scss">
.product-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  margin-bottom: 18px;

  &__name {
    font-size: 18px;
    text-align: left;
  }

  &__info {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__price {
      font-size: 18px;
      font-weight: bold;
    }

    &__cart-button {
      right: 0;
    }
  }
}

/* .product-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.product-link {
  color: #2c3e50;
  text-decoration: none;
} */

</style>
