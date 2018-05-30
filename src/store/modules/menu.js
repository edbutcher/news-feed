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
      },
      {
        url: '/favorite',
        text: 'Favorite'
      },
      {
        url: '/contact',
        text: 'Contact'
      }
    ]
  },
  getters: {
    items (state) {
      return state.items
    }
  }
}
