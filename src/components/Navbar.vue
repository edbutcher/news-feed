<template>
  <div>
    <router-link v-for="(item, index) in menuList"
                 :key="index"
                 :to="item.url"
                 tag="li"
    >
      <a>{{ item.text}}</a>
    </router-link>
  </div>
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

</style>
