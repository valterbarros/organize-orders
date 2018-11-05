<template>
  <div>
    <mt-header title="Organize Orders">
      <div slot="left" v-if="show_back_button()">
        <mt-button @click="$router.go(-1)" icon="back">back</mt-button>
      </div>
      <router-link v-if="show_new_button()" :to="{name: 'order-new'}" slot="right">Novo Pedido</router-link>
    </mt-header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show_back_button_paths_name: ['order-new', 'boss'],
      show_new_order_button_paths_name: ['order-index'],
      current_router_name: ''
    }
  },
  methods: {
    show_back_button () {
      const {
        show_back_button_paths_name, current_router_name
      } = this

      return show_back_button_paths_name.indexOf(this.$router.currentRoute.name) > -1
    },
    show_new_button () {
      const {
        show_new_order_button_paths_name, current_router_name
      } = this

      return show_new_order_button_paths_name.indexOf(this.$router.currentRoute.name) > -1
    }
  }
}
</script>