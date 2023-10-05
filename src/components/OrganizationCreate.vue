<template>
  <div class="form" @click="closeDropDown">
    <div class="form__header">
      <h4>Организация</h4>
      <MyButton class="button button__secondary button__secondary_grey" @click="hideModal">
        <template v-slot:text>Отменить</template>
        <template v-slot:icon>
          <SvgIcon class="icon_black" :iconName="'#close'" />
        </template>
      </MyButton>
    </div>
    <div class="form__content">
      <div>
        <p class="form__subtitle"><span>*</span> Тип</p>
        <MySelect :options="selectOptions" :visibility="isDropped"
          @click.stop="isDropped = !isDropped" placeholder="Выберите тип" />
      </div>
      <div>
        <p class="form__subtitle"><span>*</span> Название организации</p>
        <MyInput placeholder="Ведите название" />
      </div>
      <div>
        <p class="form__subtitle"><span>*</span> Описание</p>
        <MyTextarea placeholder="Введите описание" />
        <p class="form__text">Описание в модуле на сайте не показывается</p>
      </div>
      <div>
        <p class="form__subtitle"><span>*</span> Логотип</p>
        <div class="drop-area" v-if="!imageUrl" ref="refDropZone">
          <div class="drop-area__instructions">
            <div>
              <p>Загрузите изображение или перетащите файл сюда</p>
              <p class="form__text">Максимальный размер изображения 10 Мб. <br>
                Допустимые форматы: .jpeg .png .webp .svg</p>
            </div>
            <MyButton class="button button__secondary button__secondary_blue">
              <template v-slot:text>Загрузить</template>
              <template v-slot:icon>
                <SvgIcon class="icon_blue" :iconName="'#plus'" />
              </template>
            </MyButton>
            <input class="input-file" type="file" @input="addFile">
          </div>
        </div>
        <div class="avatar" v-else>
          <img class="avatar__img" :src="imageUrl" alt="logo">
        </div>
      </div>
    </div>
    <div class="form__button">
      <MyButton class="button button__primary">
        <template v-slot:text>Сохранить</template>
      </MyButton>
    </div>
  </div>
</template>

<script setup>
import MySelect from '@/components/UI/select/MySelect.vue';
import MyTextarea from '@/components/UI/MyTextarea.vue';
import MyInput from '@/components/UI/MyInput.vue';
import MyButton from '@/components/UI/MyButton.vue';
import SvgIcon from '@/components/UI/SvgIcon.vue';
import { ref } from 'vue';
import { useDropZone } from '@vueuse/core'

const emit = defineEmits(['hideModal'])

const hideModal = () => {
  emit('hideModal')
}

const isDropped = ref(false)
const closeDropDown = () => {
  if (isDropped.value === true) {
    isDropped.value = false
  }
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

const imageUrl = ref('')
const refDropZone = ref()

const imageCheck = (file) => {
  if (!['image/jpeg', 'image/png', 'image/svg', 'image/webp'].includes(file.type)) {
    alert('формат изображения не подходит')
  } else if (file.size > 80000) {
    alert('файл слишком большой')
  } else {
    imageUrl.value = URL.createObjectURL(file)
  }
}

const onDrop = (files) => {
  const file = files[0]
  imageCheck(file)
}

const addFile = (event) => {
  const file = event.target.files[0]
  imageCheck(file)
}

useDropZone(refDropZone, onDrop)
</script>

<style lang="scss" scoped>
.form {
  @extend %form;

  &__content {
    @extend %form;
  }

  &__header {
    display: flex;
    justify-content: space-between;
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

.avatar {
  max-width: 170px;
  max-height: 170px;
  border-radius: 8px;
  border: 1px solid $border-light;
}

.drop-area {
  padding: 16px;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  border: 1px dashed $border-secondary;

  &__instructions {
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
  }

  &:hover {
    background-color: $bg-drop-area;
    border-color: $border-primary;
  }
}

.input-file {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
}
</style>