import Vue from 'vue'
import VueRouter from 'vue-router'

import SubredditInput from './components/SubredditInput'
import HomePage from './components/HomePage'
import Page404 from './components/Page404'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: 'home'
  },
  {
    name: 'home',
    path: '/home',
    component: HomePage
  },
  {
    path: '/newsfeed',
    component: SubredditInput
  },
  {
    path: '*',
    component: Page404
  }
]

export const router = new VueRouter({
  routes,
  mode: 'history'
})
