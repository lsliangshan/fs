<template>
  <transition name="fade" enter-active-class="animatedFast fadeIn" leave-active-class="animatedFast fadeOut">
    <div class="login-wrapper">
      <div class="login-container">
        <h2 class="title tac" v-text="appName"></h2>
        <form id="form-register">
          <div class="form-item phonenum">
            <input type="text" placeholder="手机号/邮箱" v-model="formData.username">
          </div>
          <div class="form-item verifycode">
            <input type="text" placeholder="验证码" v-model="formData.verifyCode">
            <a href="javascript:" class="get-verifycode"
               v-ajax-form :data-action="requestUrl.getVerifyCode" data-method="post" data-target-id="form-register"
               :data-before="beforeGetVerifyCode">发送验证码</a>
          </div>
          <div class="form-item password">
            <input type="password" v-if="!showPassword" v-model="formData.password" placeholder="密码">
            <input type="text" v-else v-model="formData.password" placeholder="密码">
            <a href="javascript:" class="forget-password" @click="togglePassword()">
              <img :src="showPassword?'../../static/img/eyeopen.png':'../../static/img/eyeclose.png'">
            </a>
          </div>
          <a href="javascript:" class="login tac"
             v-ajax-form data-target-id="form-register" :data-action="requestUrl.register" data-method="post"
             :data-before="beforeRegister">下一步</a>
        </form>
        <router-link to="/login">
          <div class="tips tac">返回登录</div>
        </router-link>
      </div>
    </div>
  </transition>
</template>
<style scoped lang="scss">
  .tac {
    text-align: center;
  }
  .login-wrapper {
    position: absolute;
    /*left: 0;*/
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #f0f0f0;
    margin: 0 auto;
  }
  .login-container {
    width: 80%;
    height: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 400px;
    margin: 0 auto;
    .title {
      margin: 15px 0;
    }
    form {
      width: 100%;
      height: auto;
      max-width: 480px;
      .form-item {
        border: 1px solid #c8c8c8;
        margin: 15px 0;
        padding: 0 8px;
        display: flex;
      }
      .password {
        position: relative;
        .forget-password {
          display: inline-block;
          position: absolute;
          right: 10px;
          top: 0;
          width: auto;
          color: #999;
          font-size: 14px;
          line-height: 42px;
          img {
            width: 14px;
            height: 14px;
            vertical-align: middle;
          }
        }
      }
      .verifycode {
        position: relative;
        .get-verifycode {
          display: inline-block;
          position: absolute;
          right: 10px;
          top: 0;
          width: auto;
          color: #999;
          font-size: 14px;
          line-height: 42px;
        }
      }
      input {
        display: inline-block;
        width: 100%;
        line-height: 46px;
        height: 42px;
        border: none;
      }
      .login {
        background-color: #ee3333;
        border: 1px solid #ee3333;
        color: #fff;
        font-weight: bold;
        display: inline-block;
        width: 100%;
        margin: 0 15px 0 0;
        line-height: 48px;
        height: 46px;
        &:active {
          background-color: #cc3333;
        }
      }
    }
    .tips {
      color: #c8c8c8;
      font-size: 16px;
      margin: 15px 0;
      cursor: pointer;
    }
  }
</style>
<script>
  export default {
    name: 'register',
    data () {
      return {
        appName: this.$root.appName,
        showPassword: false,
        formData: {
          username: '',
          verifyCode: '',
          password: ''
        },
        lang: this.$root.lang,
        requestUrl: this.$root.requestUrl,
        regExp: this.$root.regExp
      }
    },
    components: {
    },
    methods: {
      togglePassword: function togglePassword () {
        this.showPassword = !this.showPassword
      },
      beforeGetVerifyCode: function beforeGetVerifyCode () {
        if (this.formData.username.trim() === '') {
          window.alert(this.lang['10003'])
          return false
        } else if (!this.regExp.tel.test(this.formData.username.trim())) {
          window.alert(this.lang['10004'])
          return false
        } else {
          return true
        }
      },
      getVerifyCode: function getVerifyCode () {
        window.alert('获取短信验证码')
      },
      beforeRegister: function beforeRegister () {
        if (this.formData.username.trim() === '') {
          window.alert(this.lang['10003'])
          return false
        } else if (!this.regExp.tel.test(this.formData.username.trim())) {
          window.alert(this.lang['10004'])
          return false
        } else if (this.formData.verifyCode.trim() === '') {
          window.alert(this.lang['10005'])
          return false
        } else if (this.formData.password.trim() === '') {
          window.alert(this.lang['10007'])
          return false
        } else {
          return true
        }
      }
    }
  }
</script>
