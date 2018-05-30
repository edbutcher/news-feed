<template>
  <nav class="main-nav">
    <ul>
      <router-link v-for="(item, index) in menuList"
                   :key="index"
                   :to="item.url"
                   tag="li"
      >
        <a>{{ item.text}}</a>
      </router-link>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'navbar-app',
  computed: {
    ...mapGetters('menu', {
      menuList: 'items'
    })
  }
}
</script>

<style scoped>

  .main-nav ul {
    display: grid;
    grid-template-columns: 1fr;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .main-nav a {
    background: var(--primary);
    display: block;
    text-decoration: none;
    padding: 0.8rem;
    text-align: center;
    color: var(--dark);
    text-transform: uppercase;
    font-size: 1.1rem;
    box-shadow: var(--shadow);
  }

  .main-nav a:hover {
    background: var(--dark);
    color: var(--light);
  }

  @media(min-width: 700px) {
    .main-nav ul {
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 20px;
    }
  }
</style>
