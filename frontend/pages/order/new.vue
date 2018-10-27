<template>
  <div>
    <p>{{ company_name }}</p>
    <mt-radio
      title="Escolha o pedido"
      v-model="value"
      :options="['Quentinha de 11 galeto', 'Quentinha de 11 carne']">
    </mt-radio>

    <mt-checklist
      title="Itens"
      v-model="value"
      :options="['Macarrão', 'Arroz']">
    </mt-checklist>

    <mt-radio
      title="Itens com mais de uma opção"
      v-model="value"
      :options="['Batata Frita', 'Macaxeira Frita']">
    </mt-radio>

    <mt-radio
      title="Itens com mais de uma opção"
      v-model="value"
      :options="['Feijão Tropeiro', 'Feijão Caseiro']">
    </mt-radio>
  </div>
</template>

<script>
export default {
  name: 'order-new',
  data () {
    return {
      value: [],
      company_name: 'Galeteria Brasão'
    }
  }
}
</script>

<style>
p {
  font-size: 2em;
  text-align: center;
}
</style>

