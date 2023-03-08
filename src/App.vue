<script>
import MenuLink from './components/common/MenuLink.vue'

export default {
  components:{
    MenuLink, 
  },
}
</script>

<template>
  <div class="logo-image">
    <img alt="Vue logo" src="./assets/images/header/logo.png">
  </div>
  <MenuLink />
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: $font-family-base;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-primary;
}

.logo-image {
  padding: 20px;
  img {
    @include devices(tablet) {
      padding: 0;
      width: 220px;
      height: auto;
    }
  }
}

</style>
