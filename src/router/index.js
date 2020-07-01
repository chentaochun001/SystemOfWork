import Vue from 'vue'
import Router from 'vue-router'
import HomeWork from '@/components/HomeWork'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeWork',
      component: HomeWork
    }
  ]
})
