<template>
  <div class="container">
    <mt-cell-swipe
    title="Galeto de 11 24/08/1995 (Valter)"
    :right="[
      {
        content: 'Deletar',
        style: { background: 'red', color: '#fff' },
        handler: () => this.$messagebox('delete')
      },
      {
        content: 'Detalhes',
        style: { background: 'blue', color: '#fff' },
        handler: () => this.$messagebox('delete')
      }
    ]"></mt-cell-swipe>
    
    <mt-cell-swipe
    title="Galeto de 11 24/08/1995 (Deric)"
    :right="[
      {
        content: 'Deletar',
        style: { background: 'red', color: '#fff' },
        handler: () => this.$messagebox('delete')
      },
      {
        content: 'Detalhes',
        style: { background: 'blue', color: '#fff' },
        handler: () => this.$messagebox('delete')
      }
    ]"></mt-cell-swipe>

    <mt-button class="create" type="primary">Finalizar</mt-button>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.create {
  text-align: center;
  width: 5em;
  align-self: center;
  margin-top: 6em;
}
</style>