<template>
  <div class="logo-image">
    <img alt="Vue logo" src="./assets/images/header/logo.png">
  </div>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">O nas</router-link> |
    <router-link to="/store">Sklep</router-link>
  </nav>
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

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: $color-primary;
  font-size: $font-size-base;
}

nav a.router-link-exact-active {
  color: $color-green;
}
</style>
