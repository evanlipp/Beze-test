<template>
  <button @click="click">
    <slot name="icon"></slot>
    <slot name="text"></slot>
  </button>
</template>

<script setup>
const emit = defineEmits(['click'])

const click = () => {
  emit('click')
}
</script>

<style lang="scss" scoped>
.button {
  font: $font-primary-small;
  font-weight: 500;
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: center;

  &__primary {
    padding: 12px 16px 12px 16px;
    width: 100%;
    color: $font-color-button-primary;
    border-radius: 8px;
    background-color: $bg-button-primary;

    &:hover {
      background-color: $bg-button-primary-hover;
    }

    &:active {
      background-color: $bg-button-primary-active;
    }
  }

  &__secondary {
    padding: 4px 8px 4px 0;
    display: flex;
    align-items: center;
    border-radius: 6px;

    &_blue {
      color: $font-color-button-secondary-blue;
      background-color: $bg-button-secondary-blue;
    }

    &:hover {
      background-color: $bg-button-secondary-blue-hover;
    }

    &:active {
      background-color: $bg-button-secondary-blue-active;
    }

    &_grey {
      color: $font-color-primary;
      background-color: $bg-secondary;

      &:hover {
        background-color: #c8c7c7;
      }

      &:active {
        background-color: #aaaaaa;
      }
    }
  }

  &__add-building {
    width: 100%;
    padding: 10px 12px 10px 12px;
    margin-top: -8px;
  }
}
</style>