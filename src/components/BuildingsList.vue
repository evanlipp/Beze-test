<template>
  <div class="buildings-list">
    <Building v-for="building in buildings" :key="building.pavilion" :building="building" />
  </div>
</template>

<script setup>
import Building from '@/components/Building.vue'
const props = defineProps({
  buildings: Array
})
</script>

<style lang="scss" scoped>
.buildings-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>