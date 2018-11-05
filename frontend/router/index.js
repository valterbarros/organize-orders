import Vue from 'vue'
import Router from 'vue-router'
import OrderNew from '../pages/order/new.vue'
import OrderIndex from '../pages/order/index.vue'
import AuthUser from '../pages/auth/user.vue'
import AuthBoss from '../pages/auth/boss.vue'
import BossIndex from '../pages/boss/index.vue'
import AuthLayout from '../pages/layouts/auth.vue'
import AppLayout from '../pages/layouts/app.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/app',
      component: AppLayout,
      children: [
        {
          path: 'order-new',
          name: 'order-new',
          component: OrderNew
        },
        {
          path: 'orders',
          name: 'order-index',
          component: OrderIndex,
        },
        {
          path: 'boss',
          name: 'boss',
          component: BossIndex
        }
      ]
    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          path: 'user',
          name: 'auth_user',
          component: AuthUser
        },
        {
          path: 'boss',
          name: 'auth_boss',
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
