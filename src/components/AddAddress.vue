<template>
  <div class="form" @click="closeDropDown">
    <div class="form__header">
      <h4>Фактический адрес</h4>
      <MyButton class="button button__secondary button__secondary_grey" @click="hideModal">
        <template v-slot:text>Отменить</template>
        <template v-slot:icon>
          <SvgIcon class="icon_black" :iconName="'#close'" />
        </template>
      </MyButton>
    </div>
    <div class="form__content">
      <div class="region">
        <p class="form__subtitle"><span>*</span> Регион</p>
        <MySelect :options="selectOptions" :error="mocError" :visibility="isDropped" @selectedOption="selectedOption"
          @click.stop="isDropped = !isDropped" placeholder="Выберите регион" />
      </div>
      <div>
        <p class="form__subtitle"><span>*</span> Район</p>
        <MyInput v-model="name" :error="mocError" placeholder="Напишите район" />
      </div>
      <div class="address">
        <p class="form__subtitle"><span>*</span> Адрес</p>
        <MyInput v-model="name" :error="mocError" placeholder="Введите адрес" />
      </div>
      <div class="index">
        <p class="form__subtitle">Почтовый индекс</p>
        <MyInput v-model="name" :error="mocError" placeholder="123456" />
      </div>
    </div>
    <div class="form__button">
      <MyButton class="button button__primary" @click="hideModal">
        <template v-slot:text>Сохранить</template>
      </MyButton>
    </div>
  </div>
</template>

<script setup>
import MySelect from '@/components/UI/select/MySelect.vue';
import MyInput from '@/components/UI/MyInput.vue';
import MyButton from '@/components/UI/MyButton.vue';
import SvgIcon from '@/components/UI/SvgIcon.vue';
import { ref } from 'vue';

const emit = defineEmits(['hideModal'])

const isDropped = ref(false)
const closeDropDown = () => {
  if (isDropped.value === true) {
    isDropped.value = false
  }
}

const type = ref()

const hideModal = () => {
  emit('hideModal')
}

const selectedOption = (option) => {
  type.value = option.name
}

const selectOptions = ref([
  { value: '1', name: 'Label1' },
  { value: '2', name: 'Label2' },
  { value: '3', name: 'Label3' },
  { value: '4', name: 'Label4' },
  { value: '5', name: 'Label5' },
  { value: '6', name: 'Label6' },
  { value: '7', name: 'Label7' },
])
</script>

<style lang="scss" scoped>
.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__content {
    padding-bottom: 16px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-column-gap: 12px;
    grid-row-gap: 16px;
  }

  &__subtitle {
    font: $font-primary-small;
    font-weight: 500;
  }

  &__text {
    font: $font-primary-small;
    color: $font-color-secondary;
  }
}

.region {
  grid-area: 1 / 1 / 1 / 2;
}

.address {
  grid-area: 2 / 1 / 2 / 3;
}

.index {
  width: 170px;
}
</style>