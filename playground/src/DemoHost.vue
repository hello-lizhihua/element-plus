<template>
  <section class="demo-page">
    <h2 class="demo-title">{{ current.label }}</h2>
    <component :is="current.comp" />
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { allItems } from './registry.js'

const route = useRoute()
const current = computed(() => {
  const key = route.params.key
  return allItems.find((item) => item.key === key) || allItems[0]
})
</script>
