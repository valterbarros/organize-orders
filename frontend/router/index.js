import Vue from 'vue'
import Router from 'vue-router'
import OrderNew from '../pages/order/new.vue'
import OrderIndex from '../pages/order/index.vue'
import SessionNewUser from '../pages/session/new_user.vue'
import SessionNewBoss from '../pages/session/new_boss.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'order-new',
      component: OrderNew
    },
    {
      path: '/orders',
      name: 'order-index',
      component: OrderIndex
    },
    {
      path: '/session/user/new',
      name: 'session_new_user',
      component: SessionNewUser
    },
    {
      path: '/session/boss/new',
      name: 'session_new_boss',
      component: SessionNewBoss
    }
  ]
})
