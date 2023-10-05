<template>
  <div class="main">
    <div class="navigation">
      <router-link class="navigation__link" to="organization">Organization</router-link>
      <router-link class="navigation__link" to="building">Buildings</router-link>
      <router-link class="navigation__link" to="address">Address</router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.main {
  padding-top: 50px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.navigation {
  display: flex;
  gap: 30px;

  &__link {
    color: inherit;
    letter-spacing: 2px;
    transition: transform 100ms;

    &:hover {
      transform: scale(1.1);
    }

    &:active {
      transform: scale(0.9);
    }
  }
}

.router-link-active {
  text-decoration: underline;
}

.content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>