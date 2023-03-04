<script setup>
    import EventCard from '@/components/EventCard.vue'
    import { ref } from 'vue'

    const events = ref([
    {   
        id: 5928101,
        category: 'coffee',
        title: 'Become the best barista',
        description: 'Barista is a great occupation',
        location: 'Coffee Store in Warsaw',
        date: '15 czerwiec 2023',
        time: '12:00',
        organizer: 'Anna K.',
    },
    {   
        id: 5552636,
        category: 'coffee',
        title: 'Become master barista',
        description: 'Barista is a great occupation',
        location: 'Coffee Store in Warsaw',
        date: '30 czerwiec 2023',
        time: '10:00',
        organizer: 'Anna K.',
    }
    ])
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