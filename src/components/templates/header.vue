<template>
  <div class="header">
    <router-link class="title" to="/">
      <div v-text="appName"></div>
    </router-link>
    <div class="menu">
      <ul>
        <li>
          <router-link to="/survey/index">调查</router-link>
        </li>
      </ul>
    </div>
    <div class="info">
      <router-link to="/message" class="message">
        <img src="../../../static/img/message.png">
      </router-link>
      <div class="avatar">
        欢迎您,
        <span v-text="loginInfo.company" class="ml10"></span>
        <span v-text="loginInfo.username" class="ml10"></span>
      </div>
      <router-link to="/login" class="settings">账户设置</router-link>
      <div class="logout">退出</div>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .ml10 {
    margin-left: 10px;
  }
  .header {
    width: 100%;
    height: 72px;
    background-color: #222A35;
    color: #fff;
    .title {
      display: inline-block;
      font-size: 16px;
      line-height: 72px;
      padding: 0 15px;
      font-weight: bold;
      width: 214px;
      float: left;
      cursor: pointer;
      color: #fff;
    }
    .menu {
      display: inline-block;
      ul {
        list-style: none;
        li {
          float: left;
          line-height: 72px;
          cursor: pointer;
          a {
            color: #fff;
            height: 100%;
            padding: 0 16px;
            display: inline-block;
          }
        }
      }
    }
    .info {
      float: right;
      display: inline-block;
      font-size: 14px;
      font-weight: normal;
      line-height: 72px;
      padding: 0 15px;
      cursor: pointer;
      color: #fff;
      .message {
        width: 20px;
        height: 72px;
        display: inline-flex;
        align-items: center;
        margin-right: 20px;
        float: left;
        img {
          width: 20px;
          height: 20px;
        }
      }
      .avatar {
        height: 72px;
        line-height: 72px;
        display: inline-block;
        float: left;
      }
      .settings {
        display: inline-block;
        color: #fff;
        margin-left: 15px;
      }
      .logout {
        display: inline-block;
        color: #fff;
        margin: 0 15px;
      }
    }
  }
</style>
<script>
  export default {
    name: 'header',
    data () {
      return {
        appName: this.$root.appName,
        isLogin: this.$root.isLogin,
        loginInfo: this.$root.loginInfo
      }
    },
    components: {
    }
  }
</script>
