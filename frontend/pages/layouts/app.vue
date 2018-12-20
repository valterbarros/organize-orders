<template>
  <div>
    <mt-header title="Organize Orders">
      <div slot="left" v-if="show_button(['order-new', 'boss'])">
        <mt-button @click="$router.go(-1)" icon="back">back</mt-button>
      </div>
      <router-link v-if="show_button(['order-index'])" :to="{name: 'order-new'}" slot="right">Novo Pedido</router-link>
    </mt-header>

    <router-view></router-view>
    
    <mt-tabbar class="position-fixed" :fixed="true">
      <a class="mint-tab-item" id="tab1" 
        :class="{ 'is-selected': selectedTabItem === 'tab1' }" 
        @click="handle_tab_item_click($event, 'orders')">
        
        <div class="mint-tab-item-icon">
          <font-awesome-icon icon="box" size="lg"></font-awesome-icon>
        </div> 
        
        <div class="mint-tab-item-label">
          Pedidos
        </div>
      </a>

      <a class="mint-tab-item" id="tab2"
        :class="{ 'is-selected': selectedTabItem === 'tab2' }"
        @click="handle_tab_item_click($event, 'boss')">

        <div class="mint-tab-item-icon">
          <font-awesome-icon icon="user-tie" size="lg"></font-awesome-icon>
        </div> 
        
        <div class="mint-tab-item-label">
          Patrão
        </div>
      </a>
    </mt-tabbar>
  </div>
</template>

<script>
import showButtonMixin from '../mixins/show_button_mixin.js'

export default {
  mixins: [showButtonMixin],
  data() {
    return {
      selectedTabItem: '',
      currentRoute: ''
    }
  },
  mounted() {
    this.currentRoute = this.$router.currentRoute.name

    if(this.currentRoute === 'order-index') {
      this.selectedTabItem = 'tab1'
    } else if(this.currentRoute === 'boss'){
      this.selectedTabItem = 'tab2'
    }
  },
  methods: {
    handle_tab_item_click: function(event, router_link) {
      this.selectedTabItem = event.currentTarget.id
      this.$router.push(router_link)
    }
  }
}
</script>