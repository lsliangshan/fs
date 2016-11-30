<template>
  <div class="survey-index">
    <router-link :to="'/survey/index/id/' + currentSurvey.id + '/s/1'">
      <md-button class="md-raised md-primary" v-md-theme="'teal'">填写问卷</md-button>
    </router-link>
  </div>
</template>
<style scoped lang="scss">
  .survey-index {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }

</style>
<script>
  export default {
    name: 'surveyIndex',
    data () {
      var _currentSurvey = {}
      var _survey = this.$parent.survey
      var _activeSurveyId = this.$parent.activeSurveyId
      for (var i = 0; i < _survey.length; i++) {
        if (_activeSurveyId === _survey[i].id) {
          _currentSurvey = _survey[i]
          i = _survey.length
        }
      }
      return {
        activeSurveyId: this.$parent.activeSurveyId,
        survey: this.$parent.survey,
        currentSurvey: _currentSurvey
      }
    },
    components: {
    },
    methods: {

    },
    watch: {
      '$route' (to, from) {
        // 对路由变化作出响应...
        this.activeSurveyId = Number(to.params.id)
        var _currentSurvey = {}
        var _survey = this.$parent.survey
        var _activeSurveyId = this.activeSurveyId
        for (var i = 0; i < _survey.length; i++) {
          if (_activeSurveyId === _survey[i].id) {
            _currentSurvey = _survey[i]
            i = _survey.length
          }
        }
        this.currentSurvey = _currentSurvey
      }
    }
  }
</script>
