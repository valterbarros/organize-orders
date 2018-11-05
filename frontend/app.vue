<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return { 
      links: [
        {
          name: '',
          link: '',
          current: false
        }
      ]
    }
  }
}
</script>