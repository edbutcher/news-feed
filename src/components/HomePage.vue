<template>
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
</template>

<script>
export default {
  name: 'home-page'
}
</script>

<style scoped>
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
@media(min-width: 700px) {
  .grid {
    display: grid;
    grid-template-columns: 1fr repeat(2, minmax(auto, 25em)) 1fr;
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
