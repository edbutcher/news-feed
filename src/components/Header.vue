<template>
  <header id="showcase" class="grid">
    <div class="bg-image"></div>
    <div class="content-wrap">
      <h1>Welcome to News Feed App</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsam unde totam et vel assumenda, voluptatem quos alias id illo!</p>
      <a href="#section-b" class="btn">Read More</a>
    </div>
  </header>
</template>

<script>
export default {
  name: 'header-app'
}
</script>

<style scoped>

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
#showcase .content-wrap {
  padding: 0 1.5em;
}
@media(min-width: 700px) {
  .grid {
    display: grid;
    grid-template-columns: 1fr repeat(2, minmax(auto, 25em)) 1fr;
  }
}
</style>
