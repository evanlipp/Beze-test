<template>
  <div class="form">
    <div class="form__header">
      <h4>Корпусы</h4>
      <MyButton class="button button__secondary button__secondary_grey" @click="hideModal">
        <template v-slot:text>Отменить</template>
        <template v-slot:icon>
          <SvgIcon class="icon_black" :iconName="'#close'" />
        </template>
      </MyButton>
    </div>
    <div class="form__content">
      <BuildingsList :buildings="buildings" />
    </div>
    <div class="form__button form__button_building-buttons">
      <MyButton class="button button__secondary button__secondary_blue button__add-building" @click="addBuilding">
        <template v-slot:text>Добавить корпус</template>
        <template v-slot:icon>
          <SvgIcon class="icon_blue" :iconName="'#plus'" />
        </template>
      </MyButton>
      <MyButton class="button button__primary" @click="hideModal">
        <template v-slot:text>Сохранить</template>
      </MyButton>
    </div>
  </div>
</template>

<script setup>
import BuildingsList from '@/components/BuildingsList.vue';
import MyButton from '@/components/UI/MyButton.vue';
import SvgIcon from '@/components/UI/SvgIcon.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore()
const emit = defineEmits(['hideModal'])

const hideModal = () => {
  emit('hideModal')
}

const buildings = computed(() => store.getters.getBuildings)

const addBuilding = () => {

  const buildingNumber = store.getters.getBuildingsCount + 1;

  const building = {
    pavilion: buildingNumber,
    name: '',
    floors: '',
    rooms: ''
  }

  store.commit('addBuildingToDraft', building)
}
</script>

<style lang="scss" scoped>
.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }


  &__subtitle {
    font: $font-primary-small;
    font-weight: 500;
  }

  &__text {
    font: $font-primary-small;
    color: $font-color-secondary;
  }

  &__button_building-buttons {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
}
</style>