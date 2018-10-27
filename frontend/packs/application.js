import Vue from 'vue'
import App from '../app.vue'
import router from '../router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css';
import "../init/shared.css"

Vue.use(MintUI)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<app/>'
})
