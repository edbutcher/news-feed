<template>
    <div>
      <h1>404: Page not found</h1>
      <router-link :to="{ name: 'home' }">Go to Home Page</router-link>
    </div>
</template>

<script>
export default {
  name: 'page404'
}
</script>

<style scoped>

</style>
