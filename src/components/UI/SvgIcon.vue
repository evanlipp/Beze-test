<template>
  <svg class="icon" xmlns="http://www.w3.org/2000/svg">
    <use :xlink:href='iconName' />
  </svg>
</template>

<script setup>
import "@/assets/icons/bin.svg"
import "@/assets/icons/close.svg";
import "@/assets/icons/plus.svg";
import "@/assets/icons/dropdown.svg";
import "@/assets/icons/checked.svg";
import "@/assets/icons/edit.svg";

const props = defineProps({
  iconName: String,
})

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