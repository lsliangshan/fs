<template>
  <div class="survey-list-container">
    <!--<ls-header></ls-header>-->
    <div class="survey-list">
      <survey-menu></survey-menu>
      <div class="survey-content">
        <div class="header" v-if="step !== 0">
          <h1>2016年人力资源调查问卷</h1>
          <div class="steps-container">
            <div class="line"></div>
            <div class="steps">
              <div class="step step1" :class="{'active': step>=1}">
                <div class="top">
                  <div class="step-line"></div>
                  <div class="step-number">1</div>
                </div>
                <div class="bottom">基本信息</div>
              </div>
              <div class="step step2" :class="{'active': step>=2}">
                <div class="top">
                  <div class="step-line"></div>
                  <div class="step-number">2</div>
                </div>
                <div class="bottom">人力资源负责人</div>
              </div>
              <div class="step step3" :class="{'active': step>=3}">
                <div class="top">
                  <div class="step-line"></div>
                  <div class="step-number">3</div>
                </div>
                <div class="bottom">高端人才</div>
              </div>
              <div class="step step4" :class="{'active': step>=4}">
                <div class="top">
                  <div class="step-line"></div>
                  <div class="step-number">4</div>
                </div>
                <div class="bottom">招聘服务</div>
              </div>
              <div class="step step5" :class="{'active': step>=5}">
                <div class="top">
                  <div class="step-line"></div>
                  <div class="step-number">5</div>
                </div>
                <div class="bottom">用工外包</div>
              </div>
              <div class="step step6" :class="{'active': step>=6}">
                <div class="top">
                  <div class="step-line"></div>
                  <div class="step-number">6</div>
                </div>
                <div class="bottom">人事外包</div>
              </div>
              <div class="step step7" :class="{'active': step>=7}">
                <div class="top">
                  <div class="step-line"></div>
                  <div class="step-number">7</div>
                </div>
                <div class="bottom">综合咨询</div>
              </div>
              <div class="step step8" :class="{'active': step>=8}">
                <div class="top">
                  <div class="step-line"></div>
                  <div class="step-number">8</div>
                </div>
                <div class="bottom">系统管理</div>
              </div>
            </div>
          </div>
        </div>
        <survey-index v-if="step === 0"></survey-index>
        <survey-step v-else></survey-step>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .survey-list-container {
    width: 100%;
    height: 100%;
    .survey-list {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: row;
      .survey-content {
        width: 100%;
        height: 100%;
        padding: 15px;
        .header {
          line-height: 2;
          margin-bottom: 20px;
          .steps-container {
            width: 100%;
            height: 120px;
            padding: 0 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            .line {
              width: 90%;
              height: 1px;
              background-color: lightgray;
              position: absolute;
            }
            .steps {
              width: 90%;
              height: 100%;
              position: absolute;
              display: flex;
              align-items: center;
              justify-content: space-around;
              .step {
                width: 100%;
                height: 100%;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                .top {
                  width: 100%;
                  height: 100%;
                  display: inline-flex;
                  align-items: center;
                  justify-content: center;
                  position: relative;
                  .step-line {
                    position: absolute;
                    width: 100%;
                    height: 1px;
                    background-color: transparent;
                  }
                  .step-number {
                    position: absolute;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background-color: #ccc;
                    color: #fff;
                    font-size: 16px;
                    font-weight: bold;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  }
                }
                .bottom {
                  position: absolute;
                  bottom: 0;
                }
                &.active {
                  .top {
                    .step-line {
                      background-color: #ee3333;
                    }
                    .step-number {
                      background-color: #ee3333;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
<script>
//  import lsHeader from '../templates/header.vue'
  import surveyMenu from './surveyMenu.vue'
  import surveyIndex from './surveyIndex.vue'
  import surveyStep from './surveyStep.vue'
  export default {
    name: 'surveyList',
    data () {
      var survey = [
        {
          id: 1,
          title: '问卷',
          subtitle: '企业人力资源调查问卷',
          type: 'questionnaire',
          icon: '../../../static/img/questionnaire.png'
        },
        {
          id: 2,
          title: '问卷2',
          subtitle: '企业人力资源调查问卷2',
          type: 'questionnaire',
          icon: '../../../static/img/questionnaire.png'
        }
      ]
      var id = Number(this.$router.currentRoute.params.id) || 0
      var step = Number(this.$router.currentRoute.params.step) || 0
      return {
        step: step,
        survey: survey,
        activeSurveyId: (id < 1) ? survey[0].id : id
      }
    },
    components: {
//      lsHeader,
      surveyMenu,
      surveyIndex,
      surveyStep
    },
    watch: {
      '$route' (to, from) {
        // 对路由变化作出响应...
        this.step = Number(to.params.step)
        this.activeSurveyId = Number(to.params.id)
      }
    }
  }
</script>
