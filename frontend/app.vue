<template>
  <div>
    <mt-header title="Organize Orders">
      <router-link to="/session/user/new" slot="left">
        <mt-button icon="back">back</mt-button>
      </router-link>
      <router-link to="/session/boss/new" slot="right">Sou Patrão</router-link>
    </mt-header>  
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