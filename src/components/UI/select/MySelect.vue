<template>
  <div class="select">
    <div class="select__input" :class="{select__input_error: error}" tabindex="0">
      <p class="select__placeholder" :class="{ select__placeholder_checked: checked }">{{ checkedOption }}</p>
      <SvgIcon :class="{ icon_inverted: visibility }" :iconName="'#dropdown'"></SvgIcon>
    </div>
    <p class="error-message" v-if="error">{{ errorMessage }}</p>
    <div class="select__options" v-if="visibility">
      <SelectItem class="select__option" v-for="option in options" :key="option.value" :option="option"
        @selectOption="showSelectedOption"/>
    </div>
  </div>
  
</template>

<script setup>
import SvgIcon from '@/components/UI/SvgIcon.vue';
import SelectItem from '@/components/UI/select/SelectItem.vue';
import { ref } from 'vue';

const props = defineProps({
  modelValue: String,
  options: {
    type: Array,
    default: () => []
  },
  visibility: {
    type: Boolean,
    default: false
  },
  placeholder: String,
  error: {
    default: false
  },
  errorMessage: {
    type: String,
    default: 'Caption message'
  }
})

const emit = defineEmits(['update:modelValue'])

const checked = ref(false)
const checkedOption = ref(props.placeholder)
const showSelectedOption = (option) => {
  checkedOption.value = option.name
  checked.value = true
}

const changeOption = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<style lang="scss" scoped>
.select {
  &__input {
    width: 100%;
    padding: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    border: 1px solid $border-secondary;

    &:hover {
      border-color: $border-primary;
    }

    &:focus {
      border-color: $border-active;

      .select__placeholder {
        color: $font-color-primary;
      }
    }

    &_error {
    border-color: $border-error;
  }
  }

  &__options {
    color: $font-color-primary;
    padding: 6px 8px 0 8px;
    position: fixed;
    width: 100%;
    max-width: 720px;
    max-height: 240px;
    overflow: scroll;
    border: 1px solid $border-secondary;
    border-radius: 8px;
    background-color: $bg-primary;
    box-shadow: 0px 8px 16px 0px #00000014;
    box-shadow: 0px 2px 8px 0px #00000014;
  }

  &__option {
    padding: 6px 8px 6px 8px;

    &:hover {
      color: $font-color-primary;
      background-color: $bg-selected;
      border-radius: 6px;
    }
  }

  &__placeholder {
    font: $font-primary-regular;
    color: $font-color-secondary;

    &_checked {
      border-color: $border-secondary;
      color: $font-color-primary;
    }
  }


  
}
</style>