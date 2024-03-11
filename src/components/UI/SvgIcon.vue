<template>
  <svg class="icon" xmlns="http://www.w3.org/2000/svg">
    <use :xlink:href='iconName' />
  </svg>
</template>

<script setup>

const props = defineProps({
  iconName: String,
})

const icon = props.iconName.slice(1)

import(`@/assets/icons/${icon}.svg`)

const emit = defineEmits(['click'])

const click = () => {
  emit('click')
}
</script>

<style  lang="scss" scoped>
.icon {
  width: 24px;
  height: 24px;
  pointer-events: none;

  &_blue {
    fill: $font-color-button-secondary-blue;
  }

  &_black {
    fill: $font-color-primary;
  }

  &_inverted {
    transform: scale(1, -1);
  }
}
</style>