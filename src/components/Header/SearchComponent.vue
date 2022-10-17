<template>
  <form class="form" @submit.prevent>
    <input
      v-model="searchValue"
      class="form-input"
      type="text"
      placeholder="Поиск по названию картины"
    />
    <button class="form-btn" type="submit">Найти</button>
  </form>
</template>

<script>
export default {
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

<style lang="scss">
.form {
  position: relative;
  height: 48px;
  width: 416px;
  &-input {
    height: 100%;
    width: 100%;
    padding: 13px 16px 14px;
    outline: none;
  }
  &-btn {
    position: absolute;
    right: 0;
    background: #403432;
    min-width: 122px;
  }
}
</style>