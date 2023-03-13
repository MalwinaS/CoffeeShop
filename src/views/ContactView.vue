<script>
import HeaderImage from '../components/common/HeaderImage.vue'
import Modal from "@/components/modals/Modal.vue";
import { ref } from "vue";


export default {
  components:{
    HeaderImage, 
    Modal
  },
  setup() {
    const modalActive = ref(false);
    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };
    return { modalActive, toggleModal };
  },
}

</script>

<template>
    <div>
        <HeaderImage />
    </div>
    <div>
      <Modal @close="toggleModal" :modalActive="modalActive">
      <div class="modal-content">
        <h1>modal header</h1>
        <p>modal message</p>
      </div>
    </Modal>
    <button @click="toggleModal" type="button">open modal</button>
    </div>
</template>

<style lang="scss" scoped>

</style>