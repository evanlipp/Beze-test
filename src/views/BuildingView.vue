<template>
  <div class="wrapper">
    <Plug>
      <template v-slot:header>
        <h4>Корпусы</h4>
      </template>
      <template v-slot:main>
        <p>Корпусы показываются в отделе бронирования и в модуле на сайте. <br>
          Для работы отеля нужен по меньшей мере один корпус.</p>
      </template>
      <template v-slot:button>
        <MyButton class="button button__secondary button__secondary_blue" @click="isModalVisible = !isModalVisible">
          <template v-slot:text>Добавить корпусы</template>
          <template v-slot:icon>
            <SvgIcon class="icon_blue" :iconName="'#plus'"></SvgIcon>
          </template>
        </MyButton>
      </template>
    </Plug>
    <div class="card">
      <div class="card__header">
        <h4>Корпусы</h4>
        <MyButton class="button button__secondary button__secondary_grey" @click="edit">
          <template v-slot:text>Редактировать</template>
          <template v-slot:icon>
            <SvgIcon class="icon_black" :iconName="'#edit'" />
          </template>
        </MyButton>
      </div>
      <div class="card__content">
        <div class="card__item">
          <h5>Корпус 1</h5>
          <div class="card__titles">
            <div class="card__title">
              <p class="card__subtitle">Название</p>
              <p class="card__text">Родничек</p>
            </div>
            <div class="card__title">
              <p class="card__subtitle">Количество этажей</p>
              <p class="card__text">5</p>
            </div>
            <div class="card__title">
              <p class="card__subtitle">Количество номерв</p>
              <p class="card__text">315</p>
            </div>
          </div>
        </div>
        <div class="card__item">
          <h5>Корпус 1</h5>
          <div class="card__titles">
            <div class="card__title">
              <p class="card__subtitle">Название</p>
              <p class="card__text">Заречный</p>
            </div>
            <div class="card__title">
              <p class="card__subtitle">Количество этажей</p>
              <p class="card__text">7</p>
            </div>
            <div class="card__title">
              <p class="card__subtitle">Количество номерв</p>
              <p class="card__text">20</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <MyModal :visibility="isModalVisible" @hideModal="isModalVisible = !isModalVisible">
      <AddBuilding @hideModal="isModalVisible = !isModalVisible" />
    </MyModal>
  </div>
</template>
  
<script setup>
import AddBuilding from '@/components/AddBuilding.vue'
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
    gap: 8px;
  }

  &__item {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px;
    border: 1px solid $border-secondary;
    border-radius: 8px;
  }

  &__titles {
    display: flex;
    gap: 16px;
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