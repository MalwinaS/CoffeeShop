<script setup>
import { defineProps } from 'vue';

    defineProps({
        event: {
            type: Object,
            required: true,
        },
    })

</script>

<template>
    <div class="event-card">
        <h3>{{ event.title }}</h3>
        <span>{{ event.time }} | {{ event.date }}</span>
    </div>
</template>

<style lang="scss" scoped>
.event-card {
  padding: 20px;
  width: 600px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 20px;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.event-link {
  color: $color-green;
  text-decoration: none;
}
h3, span {
    line-height: 0;
}
</style>