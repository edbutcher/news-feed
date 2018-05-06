<template>
  <div id="app">
    <div class="header">

    </div>
    <div class="navbar">

    </div>
    <div class="body">

    </div>
    <div class="footer">

    </div>
  </div>
</template>

<script>
import SubredditInput from './components/SubredditInput'

export default {
  name: 'App',
  components: {
    SubredditInput
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .header {
    background-color: aqua;
  }
</style>
