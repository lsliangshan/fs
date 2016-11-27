<template>
  <div class="main" v-show="isLogin">
    <ls-header></ls-header>
  </div>
</template>
<style>

</style>
<script>
  import lsHeader from './templates/header.vue'
  export default {
    name: 'home',
    components: {
      lsHeader
    },
    data () {
      if (!this.$root.isLogin) {
        window.location.replace('/login')
      }
      return {
        isLogin: this.$root.isLogin
      }
    }
  }
</script>
