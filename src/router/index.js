import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/module/Home'
import Fine from '@/components/module/Fine'
import Order from '@/components/module/Order'
import My from '@/components/module/My'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/fine',
      name: 'Fine',
      component: Fine
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/my',
      name: 'My',
      component: My
    }
  ]
})
