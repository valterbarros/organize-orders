<template>
  <div>
    <mt-header title="Organize Orders">
      <div slot="left" v-if="show_button(['auth-boss'])">
        <mt-button @click="$router.go(-1)" icon="back">back</mt-button>
      </div>
      <router-link v-if="show_button(['auth-user'])" :to="{name: 'auth-boss'}" slot="right">Sou Patrão</router-link>
    </mt-header>
    <router-view></router-view>
  </div>
</template>

<script>
import showButtonMixin from '../mixins/show_button_mixin.js'

export default {
  mixins: [showButtonMixin]
}
</script>