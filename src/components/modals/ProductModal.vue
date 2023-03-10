<script>
import { ref } from 'vue';
export default {
  setup() {
    const openModal = ref(false);
    console.log('zimno')
  },
};

</script>

<template>
    <div class="modal" v-if="show">
      <div class="modal-content">
        <slot></slot>
        <p>To jest modal</p>
        <button @click="close">Close</button>
      </div>
    </div>
  </template>


<style>
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: white;
  padding: 20px;
}
</style>
