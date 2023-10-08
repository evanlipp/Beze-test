<template>
  <div class="building">
    <div class="building__header">
      <h5>Корпус {{ building.pavilion }}</h5>
      <MyButton class="button" v-if="buildingsCount > 1" @click="deleteBuilding">
        <template v-slot:icon>
          <SvgIcon :iconName="'#bin'" />
        </template>
      </MyButton>
    </div>
    <div class="building__form">
      <div class="building__form_name">
        <p class="form-subtitle"><span>*</span> Название</p>
        <MyInput placeholder="Напишите название" />
      </div>
      <div class="building__form_floors">
        <p class="form-subtitle"><span>*</span> Количество этажей</p>
        <MyInput placeholder="0" />
      </div>
      <div class="building__form_rooms">
        <p class="form-subtitle"><span>*</span> Количество номеров</p>
        <MyInput placeholder="0" />
      </div>
    </div>
  </div>
</template>

<script setup>
import MyInput from '@/components/UI/MyInput.vue';
import MyButton from '@/components/UI/MyButton.vue';
import SvgIcon from '@/components/UI/SvgIcon.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore()

const props = defineProps({
  building: Object
})

const buildingsCount = computed(() => store.getters.getBuildingsCount)

const deleteBuilding = () => {
  store.commit('deleteBuildingFromDraft', props.building)
}
</script>

<style lang="scss" scoped>
.building {
  padding: 16px;
  background-color: $bg-building;
  border: 1px solid $border-light;
  border-radius: 8px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__form {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 12px;
    grid-row-gap: 16px;

    @media (max-width: 440px) {
      display: flex;
      flex-direction: column;
    }

    &_name {
      grid-area: 1 / 1 / 1 / 3;
    }
  }
}
</style>