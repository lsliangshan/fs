<template>
<div class="footer">
  Powered By {{author}}, 2016
</div>
</template>
<style scoped lang="scss">
  .footer {
    width: 100%;
    height: 32px;
    font-size: 14px;
    color: #c5c5c5;
    text-align: center;
    line-height: 32px;
    position: fixed;
    left: 0;
    bottom: 0;
  }
</style>
<script>
  export default {
    name: 'footer',
    data () {
      return {
        author: this.$root.author
      }
    },
    components: {
    }
  }
</script>
