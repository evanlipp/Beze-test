<template>
  <input class="input" :class="{input_error: error}" :value="modelValue" @input="updateInput" tabindex="1" :placeholder="placeholder" :maxlength="charactersMaxCount">
  <p class="error-message" v-if="error">{{ errorMessage }}</p>
</template>

<script setup>
const props = defineProps({
  modelValue: String,
  charactersMaxCount: Number,
  error: {
    default: false
  },
  errorMessage: {
    type: String,
    default: 'Caption message'
  },
  placeholder: String
})

const emit = defineEmits(['update:modelValue'])

const updateInput = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<style lang="scss" scoped>
.input {
  color: $font-color-primary;
  font: $font-primary-regular;
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid $border-secondary;

  &::placeholder {
    font: $font-primary-regular;
    color: $font-color-secondary;
  }

  &:hover {
    border-color: $border-primary;
  }

  &:focus {
    outline: none;
    border-color: $border-active;

    &::placeholder {
      color: $font-color-primary;
    }
  }

  &_error {
    border-color: $border-error;
  }
}
</style>