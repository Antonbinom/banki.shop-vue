<template>
  <div class="modal">
    <div class="modal-overlay" @click="onClose"></div>
    <div class="modal__content">
      <div class="modal-close" @click="onClose">x</div>
      <div class="modal__info">
        <h1 class="modal-title">{{ info.name }}</h1>
        <p class="modal-description">{{ info.description }}</p>
        <h6 class="modal-price-old">{{ info.oldPrice }}</h6>
        <h3 class="modal-price-new">{{ info.price }}</h3>
      </div>
      <swiper
        v-if="info.images"
        :slides-per-view="1"
        :pagination="{ clickable: true }"
        :loop="true"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="slide in info.images" :key="slide">
          <img
            class="slider-image"
            :src="require(`../../assets/img/slider/${slide}`)"
            alt=""
          />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

export default {
  props: {
    info: {
      type: Object,
      require: true
    }
  },
  methods: {
    onClose() {
      this.$emit('onClick')
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const onSwiper = swiper => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination]
    }
  }
}
</script>

<style lang="scss">
.slider-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
</style>