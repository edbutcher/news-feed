<template>
  <div id="app">
    <div id="header">
      <Header></Header>
    </div>
    <div id="navbar">
      <Navbar></Navbar>
    </div>
    <div id="body">
      <Body></Body>
    </div>
    <div id="footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import SubredditInput from './components/SubredditInput'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import Page404 from './components/Page404'

export default {
  name: 'App',
  components: {
    Header,
    Navbar,
    Body,
    Footer,
    SubredditInput,
    HomePage,
    Page404
  }
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
#header {
  background-color: aqua;
  height: 5%;
  margin-top: 50px;
}
#navbar{
  background-color: burlywood;
  height: 5%;
  position: fixed;
  top: 0;
  width: 100%;
}
#body {
  background-color: white;

}
#footer{
  background-color: aqua;
  height: 5%;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
