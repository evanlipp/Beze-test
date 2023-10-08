<template>
  <Plug v-if="!organization">
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
  <div v-else class="card">
    <div class="card__header">
      <h4>Организация</h4>
      <MyButton class="button button__secondary button__secondary_grey" @click="edit">
        <template v-slot:text>Редактировать</template>
        <template v-slot:icon>
          <SvgIcon class="icon_black" :iconName="'#edit'" />
        </template>
      </MyButton>
    </div>
    <div class="card__content">
      <div>
        <p class="card__subtitle">Тип</p>
        <p class="card__text" :type="type">{{ type }}</p>
      </div>
      <div>
        <p class="card__subtitle">Название организации</p>
        <p class="card__text">{{ name }}</p>
      </div>
      <div>
        <p class="card__subtitle">Описание</p>
        <p class="card__text">{{ description }}</p>
      </div>
    </div>
    <p class="card__subtitle card__subtitle_logo">Логотип</p>
    <div class="avatar">
      <img class="avatar__img" :src="logo" alt="logo">
    </div>
  </div>
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
import { computed, ref, onUpdated } from 'vue';
import { useStore } from 'vuex';

const store = useStore()

const isModalVisible = ref(false)

const edit = () => {
  isModalVisible.value = true
}

const type = ref()
const name = ref('')
const description = ref()
const logo = ref()

const organization = computed(() => store.getters.getOrganizationProfile)

onUpdated(() => {
  if (organization.value !== null) {
    type.value = organization.value.type
    name.value = organization.value.name
    description.value = organization.value.description
    logo.value = organization.value.logo
  }
})
</script>

<style lang="scss" scoped>
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

  &__subtitle {
    font: $font-primary-small;
    color: $font-color-secondary;

    &_logo {
      color: $font-color-primary;
      font-weight: 500;
    }
  }

  &__text {
    font: $font-primary-regular;
    font-weight: 500;
    color: $font-color-primary;
  }
}
</style>