<template>
  <div v-if="card.sale" class="card">
    <teleport to="body">
      <modal-component
        @onClick="isModalOpen = false"
        :info="card"
        v-if="isModalOpen"
      />
    </teleport>
    <img
      @click="isModalOpen = true"
      class="card-image"
      :src="require(`../../assets/img/${card.image}`)"
      :alt="`Изображение: ${card.name}`"
    />
    <div class="card__info">
      <h2 @click="isModalOpen = true" class="card-title">{{ card.name }}</h2>
      <div class="card-bottom">
        <div class="card__price">
          <h6 class="card__price-old">{{ card.oldPrice }}</h6>
          <h3 class="card__price-new">{{ card.price }}</h3>
        </div>
        <button
          v-if="card.cart === 'Купить'"
          @click="changeButton(card.id, card.cart)"
          class="btn-buy"
        >
          Купить
        </button>
        <button v-if="card.cart === 'Обрабатывается'" class="btn-progress">
          <preloader-component />
        </button>
        <button
          @click="changeButton(card.id, card.cart)"
          v-if="card.cart === 'В корзине'"
          class="btn-done"
        >
          <svg
            width="16"
            height="13"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5316 1.80934L5.63353 11.2369L1.34826 7.19234"
              stroke="#F4F6F9"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          В корзине
        </button>
      </div>
    </div>
  </div>

  <div v-else class="card card-sold">
    <img
      class="card-image"
      :src="require(`../../assets/img/${card.image}`)"
      :alt="`Изображение: ${card.name}`"
    />
    <div class="card__info">
      <h2 class="card-title">{{ card.name }}</h2>
      <div class="card__price-sold">
        <h3 class="card__sold">Продана на аукционе</h3>
      </div>
    </div>
  </div>
</template>

<script>
import PreloaderComponent from '../PreloaderComponent.vue'
import ModalComponent from './ModalComponent.vue'
export default {
  data() {
    return {
      isModalOpen: false
    }
  },
  props: {
    card: {
      type: Object,
      require: true
    }
  },
  methods: {
    changeButton(id, status) {
      if (status === 'Купить') {
        this.$store.dispatch('setCartStatus', [id, 'Обрабатывается'])
        setTimeout(() => {
          this.$store.dispatch('setCartStatus', [id, 'В корзине'])
        }, 2000)
      } else {
        this.$store.dispatch('setCartStatus', [id, 'Обрабатывается'])
        setTimeout(() => {
          this.$store.dispatch('setCartStatus', [id, 'Купить'])
        }, 1000)
      }
    }
  },
  components: { PreloaderComponent, ModalComponent }
}
</script>