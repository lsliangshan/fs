<template>
  <div id="app">
    <ls-header></ls-header>
    <div class="main-container" :style="{'height': (body.height - 72) + 'px'}">
      <router-view class="view"></router-view>
    </div>
    <ls-footer></ls-footer>
  </div>
</template>

<script>
  import lsHeader from './components/templates/header.vue'
  import lsFooter from './components/templates/footer.vue'
  export default {
    name: 'app',
    data () {
      const bodyHeight = document.body.getBoundingClientRect().height
      return {
        body: {
          height: bodyHeight
        }
      }
    },
    components: {
      lsHeader,
      lsFooter
    }
  }
</script>

<style scoped lang="scss">
  #app {
    height: 100%;
    display: flex;
    flex-direction: column;
    .main-container {
      width: 100%;
    }
  }

</style>
