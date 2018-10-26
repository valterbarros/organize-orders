import Vue from 'vue'
import Router from 'vue-router'
import OrderNew from '../pages/order/new.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'order-new',
      component: OrderNew
    }
  ]
})
