<template>
  <div>
    <header-component />
    <main-component />
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from '../components/Header/HeaderComponent.vue'
import FooterComponent from '../components/Footer/FooterComponent.vue'
import MainComponent from '../components/Main/MainComponent.vue'

export default {
  components: { HeaderComponent, FooterComponent, MainComponent }
}
</script>