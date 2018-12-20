import Vue from 'vue'
import App from '../app.vue'
import router from '../router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css';
import "../init/shared.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTasks, faMapMarkerAlt, faUser, faListUl, faCalendar, faFileAlt, faBox, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTasks, faMapMarkerAlt, faUser, faListUl, faCalendar, faFileAlt, faBox, faUserTie)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(MintUI)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<app/>'
})