<template>
  <div class="survey-list-container">
    <ls-header></ls-header>
    <div class="survey-list">
      <survey-menu></survey-menu>
      <div class="survey-content">
        <survey-index v-if="step === 0"></survey-index>
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
      height: calc(100% - 72px);
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
  }
</style>
<script>
  import lsHeader from '../templates/header.vue'
  import surveyMenu from './surveyMenu.vue'
  import surveyIndex from './surveyIndex.vue'
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
      var id = this.$router.currentRoute.params.id || 0
      var step = this.$router.currentRoute.params.step || 0
      return {
        step: step,
        survey: survey,
        activeSurveyId: (id < 1) ? survey[0].id : id
      }
    },
    components: {
      lsHeader,
      surveyMenu,
      surveyIndex
    }
  }
</script>
