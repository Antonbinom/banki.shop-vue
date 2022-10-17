<template>
  <section class="cards">
    <div class="container">
      <h1 class="title">{{ title }}</h1>
      <div class="cards__wrapper">
        <card-component :card="card" v-for="card in getCards" :key="card.id" />
      </div>
    </div>
  </section>
</template>

<script>
import CardComponent from './CardComponent.vue'
export default {
  components: { CardComponent },
  data() {
    return {
      title: 'Картины эпохи Возрождения'
    }
  },
  computed: {
    getCards() {
      return this.$store.getters['getCards']
    }
  }
}
</script>