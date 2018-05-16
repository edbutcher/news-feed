import Vue from 'vue'
import Vuex from 'vuex'

import newsData from './modules/newsData'
import menu from './modules/menu'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    newsData,
    menu
  },
  strict: process.env.NODE_ENV !== 'production'
})
