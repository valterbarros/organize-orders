<template>
  <div>
    <mt-header title="Organize Orders">
      <div slot="left" v-if="show_back_button()">
        <mt-button @click="$router.go(-1)" icon="back">back</mt-button>
      </div>
      <router-link v-if="show_boss_button()" :to="{name: 'auth_boss'}" slot="right">Sou Patrão</router-link>
    </mt-header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show_back_button_paths_name: ['auth_boss'],
      show_boss_button_paths_name: ['auth_user'],
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
    show_boss_button () {
      const {
        show_boss_button_paths_name, current_router_name
      } = this

      return show_boss_button_paths_name.indexOf(this.$router.currentRoute.name) > -1
    }
  }
}
</script>