<template>
  <footer id="main-footer" class="grid">
    <div>News Feed App</div>
    <div><a href="#">No company</a></div>
  </footer>
</template>

<script>
export default {
  name: 'footer-app'
}
</script>

<style scoped>
#main-footer {
  padding: 2em;
  background: #000;
  color: var(--light);
  text-align: center;
}
#main-footer a {
  color: #2690d4;
  text-decoration: none;
}
@media(min-width: 700px) {
  .grid {
    display: grid;
    grid-template-columns: 1fr repeat(2, minmax(auto, 25em)) 1fr;
  }
  #main-footer div {
    grid-column: span 2;
  }
}
</style>
