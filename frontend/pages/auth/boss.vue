<template>
  <div class="container">
    <mt-field label="Qual seu email?" placeholder="Digite seu email..." v-model="username"></mt-field>
    <mt-field label="Qual sua senha?" placeholder="Digite sua senha..." v-model="username"></mt-field>
    <mt-button class="create" type="primary">Entrar</mt-button>
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