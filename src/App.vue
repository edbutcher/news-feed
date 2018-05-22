<template>
  <div id="app">
    <!-- Navigation -->
    <nav class="main-nav">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Newsfeed</a>
        </li>
        <li>
          <a href="#">Favorite</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>

    <!-- Header -->
    <header id="showcase" class="grid">
      <div class="bg-image"></div>
      <div class="content-wrap">
        <h1>Welcome to News Feed App</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsam unde totam et vel assumenda, voluptatem quos alias id illo!</p>
        <a href="#section-b" class="btn">Read More</a>
      </div>
    </header>

    <!-- Main -->
    <main>
      <section id="section-a" class="grid">
        <div class="content-wrap">
          <h2 class="content-titel">
              News from Reddit
          </h2>
          <div class="content-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem deserunt dicta distinctio, dolore eaque esse est facere fugiat harum id libero minus nobis optio perferendis quam, rerum tempora vel vero voluptatum! Alias at autem facilis, iure laudantium sint suscipit?</p>
          </div>
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

    <!-- Footer -->
    <footer id="main-footer" class="grid">
      <div>News Feed App</div>
      <div><a href="#">No company</a></div>
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

/* Navigation */
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
.btn {
  display: inline-block;
  background: var(--dark);
  color: var(--light);
  text-decoration: none;
  padding: 1em 2em;
  border: 1px solid #666;
  margin: .5em 0;
}
.btn:hover {
  background: #eaeaea;
  color: var(--dark);
}
#showcase {
  min-height: 450px;
  color: var(--light);
  text-align: center;
}
#showcase .bg-image {
  position: absolute;
  background: var(--dark) url("http://news.bbcimg.co.uk/news/special/2015/newsspec_10077/content/english/img/1024/future_of_news.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 450px;
  z-index: -1;
  opacity: 0.4;
}
#showcase h1 {
  padding-top: 100px;
  padding-bottom: 0;
}
#showcase .content-wrap,
#section-a .content-wrap {
  padding: 0 1.5em;
}
#section-a {
  background: #aeaeae;
  color: var(--dark);
  padding-bottom: 2em;
}
#section-b {
  padding: 2em 1em 1em;
}
#section-b ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
#section-b li {
  margin-bottom: 1em;
  background: var(--light);
  color: var(--dark);
}
.card-content {
  padding: 1.5em;
}
#section-c {
  background: var(--light);
  color: var(--dark);
  padding: 2em;
}
#section-d .box {
  padding: 2em;
  color: var(--light);
}
#section-d .box:first-child {
  background: #2690d4;
}
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
  /*Media Queries*/
@media(min-width: 700px) {
  .grid {
    display: grid;
    grid-template-columns: 1fr repeat(2, minmax(auto, 25em)) 1fr;
  }

  .main-nav ul {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
  }

  #section-a .content-text {
    columns: 2;
    column-gap: 2em;
  }
  #section-a .content-text p {
    padding-top: 0;
  }

  .content-wrap,
  #section-b ul {
    grid-column: 2/4;
  }

  .box, #main-footer div {
    grid-column: span 2;
  }
  #section-b ul {
    display: flex;
    justify-content: space-around;
  }
  #section-b li {
    width: 31%;
  }
}
</style>
