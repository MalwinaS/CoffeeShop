<script>
import IconZoom from "@/assets/images/icons/IconZoom.vue";
export default {
  components: {
    IconZoom,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <section class="product-card">
    <div class="product-card__icon">
      <IconZoom @click="$openNav()" />
    </div>
    <picture class="product-card__image">
      <img src="@/assets/images/product-images/box.png" alt="" loading="lazy" />
    </picture>
    <p class="product-card__name">{{ product.name }}</p>
    <div class="product-card__info">
      <p class="product-card__info__price">{{ product.price }},00 zł</p>
      <BaseButton label="Do koszyka"></BaseButton>
    </div>
  </section>
</template>

<style scoped lang="scss">
.product-card {
  padding: 20px;
  width: 240px;
  cursor: pointer;
  margin-bottom: 18px;
  position: relative;

  &__icon {
    position: absolute;
    right: 0;
    cursor: pointer;
  }

  &__image{
    img {
    width: 100%;
    }
  }

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
