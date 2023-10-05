<template>
  <div class="plug">
    <div class="plug__header">
      <slot name="header"></slot>
    </div>
    <div class="plug__main">
      <slot name="main"></slot>
    </div>
    <div class="plug__button">
      <slot name="button"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.plug {
  padding: 24px;
  max-width: 770px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: $bg-primary;
  border: 1px solid $border-light;
  border-radius: 16px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.08);
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);

  &__main {
    align-self: center;
    text-align: center;
  }

  &__button {
    align-self: center;
  }
}
</style>