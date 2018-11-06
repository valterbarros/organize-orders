<template>
  <div>
    <mt-header title="Organize Orders">
      <div slot="left" v-if="show_button(['order-new', 'boss'])">
        <mt-button @click="$router.go(-1)" icon="back">back</mt-button>
      </div>
      <router-link v-if="show_button(['order-index'])" :to="{name: 'order-new'}" slot="right">Novo Pedido</router-link>
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