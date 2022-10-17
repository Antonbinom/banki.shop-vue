<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <navbar-component v-if="width > 576" />
        <burger-button-component v-if="width < 576" @click="openMenu" />
        <search-component />
        <mobile-menu-component v-if="isOpenMenu" />
      </div>
    </div>
  </header>
</template>

<script>
import NavbarComponent from '../NavbarComponent.vue'
import SearchComponent from './SearchComponent.vue'
import BurgerButtonComponent from '../BurgerButtonComponent.vue'
import MobileMenuComponent from '../MobileMenuComponent.vue'

export default {
  components: {
    NavbarComponent,
    SearchComponent,
    BurgerButtonComponent,
    MobileMenuComponent
  },
  data() {
    return {
      width: '',
      isOpenMenu: false
    }
  },
  methods: {
    updateWidth() {
      this.width = window.innerWidth
    },
    openMenu() {
      this.isOpenMenu = !this.isOpenMenu
    }
  },
  created() {
    this.width = window.innerWidth
    window.addEventListener('resize', this.updateWidth)
  }
}
</script>