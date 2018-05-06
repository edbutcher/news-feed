<template>
  <div>
    {{getData}}
    {{loadData}}

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'subreddit-input',
  computed: {
    getData () {
      return this.$store.getters['newsData/getData']
    },
    loadData () {
      return this.$store.getters['newsData/loadData']
    }
  },
  created () {
    axios.get('https://www.reddit.com/r/dogs/hot/.json')
      .then(response => {
        this.subreddit = response
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>
