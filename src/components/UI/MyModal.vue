<template>
  <div class="modal" v-if="visibility" @click="hideModal">
    <div @click.stop class="modal__content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>


const props = defineProps({
  visibility: {
    type: Boolean,
    default: false,
  }
})

const emit = defineEmits(['hideModal'])

const hideModal = () => {
  emit('hideModal')
}
</script>

<style lang="scss" scoped>
.modal {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  background: rgb(0, 0, 0, 0.5);

  &__content {
    padding: 24px;
    max-width: 770px;
    width: 100%;
    
    display: flex;
    background: $bg-primary;
    border: 1px solid $border-light;
    border-radius: 16px;
  }
}

</style>
