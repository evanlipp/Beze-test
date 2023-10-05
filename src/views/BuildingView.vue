<template>
  <Plug>
    <template v-slot:header>
      <h4>Корпусы</h4>
    </template>
    <template v-slot:main>
      <p>Корпусы показываются в отделе бронирования и в модуле на сайте. <br>
        Для работы отеля нужен по меньшей мере один корпус.</p>
    </template>
    <template v-slot:button>
      <MyButton class="button button__secondary button__secondary_blue" @click="isVisible = !isVisible">
        <template v-slot:text>Добавить корпусы</template>
        <template v-slot:icon>
          <SvgIcon class="icon_blue" :iconName="'#plus'"></SvgIcon>
        </template>
      </MyButton>
    </template>
  </Plug>
</template>
  
<script setup>
import MyButton from '@/components/UI/MyButton.vue';
import SvgIcon from '@/components/UI/SvgIcon.vue';
import Plug from '@/components/Plug.vue'
import { ref } from 'vue';

const isVisible = ref(false)
</script>
  
<style lang="scss" scoped></style>