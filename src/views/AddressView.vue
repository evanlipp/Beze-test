<template>
  <div class="wrapper">
    <Plug>
      <template v-slot:header>
        <h4>Фактический адрес</h4>
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
    <div class="card">
      <div class="card__header">
        <h4>Фактический адрес</h4>
        <MyButton class="button button__secondary button__secondary_grey" @click="edit">
          <template v-slot:text>Редактировать</template>
          <template v-slot:icon>
            <SvgIcon class="icon_black" :iconName="'#edit'" />
          </template>
        </MyButton>
      </div>
      <div class="card__content">
            <div class="card__title">
              <p class="card__subtitle">Регион</p>
              <p class="card__text">Пермский край</p>
            </div>
            <div class="card__title">
              <p class="card__subtitle">Адрес</p>
              <p class="card__text">г. Пермь, ул. Трубная, дом 12, корп. 1, стр. 1</p>
            </div>
            <div class="card__title">
              <p class="card__subtitle">Почтовый индекс</p>
              <p class="card__text">123456</p>
            </div>
      </div>
    </div>
    <MyModal :visibility="isModalVisible" @hideModal="isModalVisible = !isModalVisible">
      <AddAddress @hideModal="isModalVisible = !isModalVisible" />
    </MyModal>
  </div>
</template>
  
<script setup>
import AddAddress from '@/components/AddAddress.vue'
import MyModal from '@/components/UI/MyModal.vue';
import MyButton from '@/components/UI/MyButton.vue';
import SvgIcon from '@/components/UI/SvgIcon.vue';
import Plug from '@/components/Plug.vue'
import { ref } from 'vue';

const isModalVisible = ref(false)

const edit = () => {
  isModalVisible.value = true
}
</script>
  
<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 770px;
  align-items: center;
  gap: 30px;
}

.card {
  width: 100%;
  max-width: 770px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: $bg-primary;
  border-radius: 16px;
  border: 1px solid $border-light;
  box-shadow: 0px 4px 8px 0px #0000000A;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__title {
    width: 100%;
  }

  &__subtitle {
    font: $font-primary-small;
    color: $font-color-secondary;
  }

  &__text {
    font: $font-primary-regular;
    font-weight: 500;
    color: $font-color-primary;
  }
}
</style>