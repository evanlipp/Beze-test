<template>
  <div class="item-wrapper" @mouseover="isVisible = !isVisible" @mouseout="isVisible = !isVisible" @click="selectOption">
    <p>{{ option.name }}</p>
    <SvgIcon v-if="isVisible" :iconName="'#checked'" />
  </div>
</template>

<script setup>
import SvgIcon from '@/components/UI/SvgIcon.vue';
import { ref } from 'vue';

const props = defineProps({
  option: Object
})

const emit = defineEmits(['selectOption'])

const isVisible = ref(false)

const selectOption = () => {
  emit('selectOption', props.option)
}
</script>

<style lang="scss" scoped>
.item-wrapper {
  display: flex;
  justify-content: space-between;
}
</style>