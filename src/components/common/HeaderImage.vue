<script>
import Vue from 'vue';

export default {
  name: 'HeaderImage',
};
</script>

<template>
    <section class="header-image grid-container">
      <div class="header-image__container">
        <picture>
          <source srcset="@/assets/images/header/coffee-beans.jpg" media='(min-width: 1152px)'>
          <img src="@/assets/images/header/coffee-beans.jpg" alt='' loading='lazy'>
        </picture>
      </div>
    </section>
</template>
  
<style scoped lang="scss">
.header-image {
    height: 130px;
  &__container{
    grid-column: 1/-1;
    img {
      margin: 0 auto;
      object-fit: contain;
      width: 100%;
      height: 250px;
      @media only screen and (max-width: 992px) {
        height: 200px;
	    }
    }
  }
}
</style>
  