import Vue from 'vue'
import Vuex from 'vuex'

import newsData from './modules/newsData'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    newsData
  },
  strict: process.env.NODE_ENV !== 'production'
})
