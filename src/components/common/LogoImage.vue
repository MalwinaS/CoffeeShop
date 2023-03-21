<script></script>

<template>
  <div class="logo-image">
    <img alt="Vue logo" src="@/assets/images/header/logo.png" />
  </div>
</template>

<style scoped lang="scss">
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
