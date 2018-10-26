import Vue from 'vue'
import App from '../app.vue'
import router from '../router'
import { Field, Radio, PaletteButton, Checklist } from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.component(Field.name, Field);
Vue.component(Radio.name, Radio);
Vue.component(PaletteButton.name, PaletteButton);
Vue.component(Checklist.name, Checklist);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<app/>'
})
