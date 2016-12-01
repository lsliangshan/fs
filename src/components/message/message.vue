<template>
  <div class="message-container">
    <div class="menu">
      <div class="item">
        <div class="menu-title">
          <div class="title">消息</div>
          <div class="subtitle">所有消息</div>
        </div>
        <div class="menu-icon">
          <img src="../../../static/img/u4840.png">
        </div>
      </div>
    </div>
    <div class="message-content">
      <h2>消息</h2>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .message-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    .menu {
      width: 244px;
      height: 100%;
      background-color: #fff;
      border-right: 1px solid #c8c8c8;
      .item {
        height: 72px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #c8c8c8;
        cursor: pointer;
        padding: 0 12px;
        .menu-title {
          display: inline-flex;
          flex-direction: column;
          pointer-events: none;
          .title {
            font-size: 16px;
            color: #ee3333;
            font-weight: bold;
            line-height: 2;
          }
          .subtitle {
            color: #666;
            font-size: 12px;
            line-height: 2;
          }
        }
        .menu-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #ee3333;
          pointer-events: none;
          img {
            pointer-events: none;
            width: 20px;
            height: auto;
          }
        }
      }
    }
    .message-content {
      width: 100%;
      height: 100%;
      padding: 15px;
    }
  }
</style>
<script>
  export default {
    name: 'message',
    data () {
      return {
      }
    },
    components: {
    }
  }
</script>
