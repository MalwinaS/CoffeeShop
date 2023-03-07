<script setup>
import { ref, onMounted } from 'vue'
import EventService from '@/services/EventService.js'

const event = ref(null)
const id = ref(156)

onMounted(() => {
  EventService.getEvent(id.value)
    .then((response) => {
      event.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
    <div v-if="event">
        <h1>{{  event.title }}</h1>
        <p>{{  event.time }} | {{ event.time }} w {{ event.location }}</p>
        <p>{{ event.description }}</p>
    </div>
</template>
