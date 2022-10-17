<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <navbar-component />
        <div class="footer__contacts">
          <div class="footer__contacts-item phone">
            <phone-icon />
            <a href="tel:+78125555555">+7 (812) 555-55-55</a>
          </div>
          <div class="footer__contacts-item apress">
            <adress-icon />
            <a
              target="_blanc"
              href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%95%D1%84%D0%B8%D0%BC%D0%BE%D0%B2%D0%B0,+3,+%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3,+190031/@59.9252557,30.3176895,17z/data=!3m1!4b1!4m5!3m4!1s0x46963101c7c878af:0x3849951a11d37622!8m2!3d59.9252557!4d30.3198782"
              >г. Санкт-Петербург, ул. Ефимова, 3</a
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import NavbarComponent from '../NavbarComponent.vue'
import AdressIcon from './Icons/AdressIcon.vue'
import PhoneIcon from './Icons/PhoneIcon.vue'

export default {
  components: { NavbarComponent, PhoneIcon, AdressIcon }
}
</script>,