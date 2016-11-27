<template>
  <div class="survey-menu">
    <router-link class="survey" v-for="s in survey" :class="{'active': s.id===activeSurveyId}" :to="'/survey/index/id/' + s.id + '/s/0'">
      <div class="survey-title">
        <div class="title" v-text="s.title"></div>
        <div class="subtitle" v-text="s.subtitle"></div>
      </div>
      <div class="survey-icon">
        <img :src="s.icon">
      </div>
    </router-link>
  </div>
</template>
<style scoped lang="scss">
  .survey-menu {
    width: 244px;
    height: 100%;
    background-color: #fff;
    border-right: 1px solid #c8c8c8;
    .survey {
      height: 72px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      border-bottom: 1px solid #c8c8c8;
      cursor: pointer;
      &:active {
        background-color: #e5e5e5;
      }
      &.active {
        background-color: #e5e5e5;
      }
      .survey-title {
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
      .survey-icon {
        width: 44px;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #ee3333;
        pointer-events: none;
        img {
          pointer-events: none;
        }
      }
    }
  }
</style>
<script>
  export default {
    name: 'surveyMenu',
    data () {
      return {
        survey: this.$parent.survey,
        activeSurveyId: this.$parent.activeSurveyId
      }
    },
    components: {
    },
    watch: {
      '$route' (to, from) {
        // 对路由变化作出响应...
        this.activeSurveyId = Number(to.params.id)
      }
    },
    methods: {
    }
  }
</script>
