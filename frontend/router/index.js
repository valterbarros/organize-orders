import Vue from 'vue'
import Router from 'vue-router'
import OrderNew from '../pages/order/new.vue'
import OrderIndex from '../pages/order/index.vue'
import AuthUser from '../pages/auth/user.vue'
import AuthBoss from '../pages/auth/boss.vue'
import BossIndex from '../pages/boss/index.vue'
import Auth from '../pages/layouts/auth.vue'

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
      path: '/auth',
      component: Auth,
      children: [
        {
          path: 'user/new',
          component: AuthUser
        },
        {
          path: 'user/boss',
          component: AuthBoss
        }
      ]
    },
    {
      path: '/boss',
      name: 'boss',
      component: BossIndex
    }
  ]
})
