<template>
  <div>
    <mt-cell-swipe
      title="Galeto de 11 24/08/1995"
      :right="[
        {
          content: 'Delete',
          style: { background: 'red', color: '#fff' },
          handler: () => this.$messagebox('delete')
        },
        {
          content: 'Detalhes',
          style: { background: 'blue', color: '#fff' },
          handler: () => this.$messagebox('delete')
        }
      ]"></mt-cell-swipe>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>

</style>