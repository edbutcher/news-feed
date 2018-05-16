export default {
  namespaced: true,
  state: {
    items: [
      {
        url: '/home',
        text: 'Home'
      },
      {
        url: '/newsfeed',
        text: 'Newsfeed'
      }
    ]
  },
  getters: {
    items (state) {
      return state.items
    }
  }
}
