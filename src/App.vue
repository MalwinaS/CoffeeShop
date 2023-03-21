<script>
import MenuLink from './components/common/MenuLink.vue'
import LogoImage from './components/common/LogoImage.vue'

export default {
  components:{
    MenuLink, 
    LogoImage
  },
}
</script>

<template>
  <LogoImage />
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

</style>
