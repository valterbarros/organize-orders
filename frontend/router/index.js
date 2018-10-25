import Vue from 'vue'
import Router from 'vue-router'
import CustomerNew from '../pages/customer/new.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'customer-new',
      component: CustomerNew
    }
  ]
})
