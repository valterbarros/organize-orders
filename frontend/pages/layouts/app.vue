<template>
  <div>
    <mt-header title="Organize Orders">
      <div slot="left">
        <mt-button @click="$router.go(-1)" icon="back">back</mt-button>
      </div>
      <router-link :to="{name: 'order-new'}" slot="right">Novo Pedido</router-link>
    </mt-header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>