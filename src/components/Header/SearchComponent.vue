<template>
  <form class="form" @submit.prevent>
    <input
      v-model="searchValue"
      class="form-input"
      type="text"
      placeholder="Поиск по названию картины"
    />
    <button v-if="width > 576" class="form-btn" type="submit">Найти</button>
  </form>
</template>

<script>
export default {
  props: {
    width: {
      type: Number
    }
  },
  computed: {
    searchValue: {
      set(value) {
        this.$store.dispatch('setSearchValue', value)
      },
      get() {
        return this.$store.getters['getSearchValue']
      }
    }
  }
}
</script>