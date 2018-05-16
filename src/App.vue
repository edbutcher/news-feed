<template>
  <div id="app">
    <header id="showcase" class="grid">
      <div class="bg-image"></div>
      <h1>Welcome to News Feed App</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolor earum facere labore, nostrum officiis placeat possimus tempore vel voluptates?</p>
      <a href="section-b#" class="btn">Read More</a>
    </header>
    <main>
      <section id="section-a" class="grid">
        <div class="content-wrap">
          <h2 class="content-titel">
              News from Reddit
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem deserunt dicta distinctio, dolore eaque esse est facere fugiat harum id libero minus nobis optio perferendis quam, rerum tempora vel vero voluptatum! Alias at autem facilis, iure laudantium sint suscipit?</p>
        </div>
      </section>
      <section id="section-b" class="grid">
        <ul>
          <li>
            <div class="card">
              <img src="http://www.volusia.com/wp-content/uploads/2013/07/news.jpg" alt="news img">
              <div class="card-content">
                <h3 class="card-title"> News Feed</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consectetur dolor enim expedita labore magni, nobis non odio quas suscipit.</p>
              </div>
            </div>
          </li>
          <li>
            <div class="card">
              <img src="http://www.volusia.com/wp-content/uploads/2013/07/news.jpg" alt="news img">
              <div class="card-content">
                <h3 class="card-title"> News Feed</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consectetur dolor enim expedita labore magni, nobis non odio quas suscipit.</p>
              </div>
            </div>
          </li>
          <li>
            <div class="card">
              <img src="http://www.volusia.com/wp-content/uploads/2013/07/news.jpg" alt="news img">
              <div class="card-content">
                <h3 class="card-title"> News Feed</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consectetur dolor enim expedita labore magni, nobis non odio quas suscipit.</p>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <section id="section-c" class="grid">
        <div class="content-wrap">
          <h2 class="content-title">
            All news what you need
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ea hic id illo magni nemo nisi, provident? Quas, quidem reprehenderit.</p>
        </div>
      </section>
      <section id="section-d" class="grid">
        <div class="box">
          <h2 class="content-title">
            Contact Us
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequatur culpa dicta eligendi eum ipsa iure laborum libero omnis, repellendus?</p>
          <p>contact@me.test</p>
        </div>
        <div class="box">
          <h2 class="content-title">
            Who did this?
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda delectus dolor ipsum libero mollitia nesciunt nisi nulla quia, recusandae reprehenderit.</p>
        </div>
      </section>
    </main>
    <footer id="main-footer" class="grid">
      <div>News Feed App</div>
      <div>No company</div>
    </footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Navbar,
    Body,
    Footer
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
