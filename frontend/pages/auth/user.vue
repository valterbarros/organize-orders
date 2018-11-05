<template>
  <div class="container">
    <mt-field label="Qual seu nome?" placeholder="Digite seu nome..." v-model="username"></mt-field>

    <router-link :to="{name: 'order-index'}">
      <mt-button class="create" type="primary">Entrar</mt-button>
    </router-link>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 60vh;
}

.create {
  text-align: center;
  width: 4em;
  align-self: center;
  margin-top: 6em;
}
</style>