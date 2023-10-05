<template>
  <textarea class="textarea" :value="modelValue" @input="updateInput" :maxlength="charactersMaxCount"
    tabindex="2"></textarea>
</template>

<script setup>
const props = defineProps({
  modelValue: String,
  charactersMaxCount: Number,
})

const emit = defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>
.textarea {
  font: $font-primary-regular;
  color: $font-color-primary;
  width: 100%;
  height: 80px;
  padding: 4px 6px 4px 6px;
  border-radius: 8px;
  border: 1px solid $border-secondary;
  resize: none;

  &::placeholder {
    font: $font-primary-regular;
    color: $font-color-secondary;
  }

  &:hover {
    border-color: $border-primary;
  }

  &:focus {
    color: $font-color-primary;
    outline: none;
    border-color: $border-active;

    &::placeholder {
      color: $font-color-primary;
    }
  }
}
</style>