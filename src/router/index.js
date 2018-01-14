import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Standings from '@/components/Standings'
import AddGame from '@/components/AddGame'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/standings',
      name: 'Standings',
      component: Standings
    },
    {
      path: '/addGame',
      name: 'Add Game',
      component: AddGame
    }
  ]
})
