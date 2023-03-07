<script setup>
    import { ref, onMounted } from 'vue'
    import EventCard from '@/components/EventCard.vue'
    import EventService from '@/services/EventService.js'

    const events = ref(null)

    onMounted(() => {
        EventService.getEvents()
        .then((response) => {
            events.value = response.data
        })
        .catch((error) => {
            console.log(error)
        })
})
</script>

<template>
    <h2>Wydarzenia o kawie</h2>
    <div class="events">
        <EventCard v-for="event in events" :key="event.id" :event="event"/>
    </div>
</template>

<style lang="scss" scoped>
    .events {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 50px;
    }
</style>