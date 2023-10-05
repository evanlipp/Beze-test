<template>
  <Plug>
    <template v-slot:header>
      <h4>Организация</h4>
    </template>
    <template v-slot:main>
      <p>Название организации, логотип и описание</p>
    </template>
    <template v-slot:button>
      <MyButton class="button button__secondary button__secondary_blue" @click="isModalVisible = !isModalVisible">
        <template v-slot:text>Добавить</template>
        <template v-slot:icon>
          <SvgIcon class="icon_blue" :iconName="'#plus'"></SvgIcon>
        </template>
      </MyButton>
    </template>
  </Plug>
  <MyModal :visibility="isModalVisible" @hideModal="isModalVisible = !isModalVisible">
    <OrganizationCreate @hideModal="isModalVisible = !isModalVisible" />
  </MyModal>
</template>

<script setup>
import OrganizationCreate from '@/components/OrganizationCreate.vue';
import MyModal from '@/components/UI/MyModal.vue';
import MyButton from '@/components/UI/MyButton.vue';
import SvgIcon from '@/components/UI/SvgIcon.vue';
import Plug from '@/components/Plug.vue'
import { ref } from 'vue';

const isModalVisible = ref(true)
</script>

<style lang="scss" scoped></style>