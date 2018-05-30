<template>
  <div id="app">
    <!-- Navigation -->
    <Navbar></Navbar>

    <!-- Header -->
    <Header></Header>

    <!-- Main -->
    <home-page></home-page>

    <!-- Footer -->
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Navbar,
    Header,
    HomePage,
    Footer
  }
}
</script>

<style>

:root {
  --primary: #ddd;
  --dark: #333;
  --light: #fff;
  --shadow: 0 1px 5px rgba(104, 104, 104, 0.8);
}

#app {
  margin: 0;
  font-family: Arial,Helvetica, sans-serif;
  background-color: var(--dark);
  color: var(--light);
  font-size: 1.1em;
  text-align: center;
  box-sizing: border-box;
}
img {
  display: block;
  width: 100%;
  height: auto;
}
h1, h2, h3 {
  margin: 0;
  padding: 1em 0;
}
p {
  margin: 0;
  padding: 1em 0;
}

</style>
