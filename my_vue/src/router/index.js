import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello2 from '@/components/Hello2'
import List from '@/components/List'
Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },   
    {
      path: '/hello2',
      name: 'Hello2',
      component: Hello2
    },   
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
