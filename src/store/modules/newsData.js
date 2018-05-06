import axios from 'axios'

export default {
  namespaced: true,
  state: {
    subredditData: 12
  },
  getters: {
    getData (state) {
      return state.subredditData
    },
    loadData () {
      axios.get('https://www.reddit.com/r/dogs/hot/.json')
        .then(response => {
          this.subreddit = response
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mutations: {

  },
  actions: {

  }
}
