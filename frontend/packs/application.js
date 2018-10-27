import Vue from 'vue'
import App from '../app.vue'
import router from '../router'
import { Field, Radio, PaletteButton, Checklist, Header, Button, CellSwipe, MessageBox } from 'mint-ui';
import 'mint-ui/lib/style.css';
import "../init/shared.css"

Vue.component(Field.name, Field);
Vue.component(Radio.name, Radio);
Vue.component(PaletteButton.name, PaletteButton);
Vue.component(Checklist.name, Checklist);
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(CellSwipe.name, CellSwipe);
Vue.component(MessageBox.name, MessageBox);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<app/>'
})
