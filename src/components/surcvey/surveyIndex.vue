<template>
  <div class="survey-index" v-text="currentSurvey.title">
  </div>
</template>
<style scoped lang="scss">
  .survey-index {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
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
