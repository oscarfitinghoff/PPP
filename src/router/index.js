import Vue from 'vue'
import Router from 'vue-router'
import Standings from '@/components/Standings'
import AddGame from '@/components/AddGame'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Add Game',
      component: AddGame
    },
    {
      path: '/standings',
      name: 'Standings',
      component: Standings
    }
  ]
})
