<template>
  <nav class="navbar">
    <ul class="navbar__list">
      <li class="navbar-item" v-for="link in links" :key="link.id">
        <a :href="link.path">{{ link.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { id: 0, name: 'Каталог', path: '/' },
        { id: 1, name: 'Доставка', path: '/' },
        { id: 2, name: 'Оплата', path: '/' },
        { id: 3, name: 'Контакты', path: '/' },
        { id: 4, name: 'О компании', path: '/' }
      ]
    }
  }
}
</script>