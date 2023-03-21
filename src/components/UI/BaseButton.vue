<script>
export default {
  props: {
    label: {
      type: String,
      require: true,
      default: "Placeholder",
    },
    buttonStyle: {
      type: String,
      default: "green",
    },
  },
};
</script>

<template>
  <button
    class="button"
    :class="[buttonStyle ? 'button--' + buttonStyle : '']"
    @click="emitClick"
  >
    <span class="button__text">{{ label }}</span>
  </button>
</template>

<style scoped lang="scss">
.button {
  height: 35px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;

  &--hidden {
    display: none;
  }

  &--green {
    background-color: $color-text-green;
    border-radius: 5px;

    &:hover {
      opacity: 0.8;
    }
  }

  &--white {
    background-color: $color-text-light;
    border-radius: 5px;
    &:hover {
      opacity: 0.8;
    }
  }

  &__text {
    font-size: 14px;
    font-weight: bold;
    text-transform: capitalize;
    color: black;
  }
}
</style>
