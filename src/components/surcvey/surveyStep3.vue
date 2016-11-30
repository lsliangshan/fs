<template>
<div>
  这是第三步——高端人才
  <br>
  <router-link :to="'/survey/index/id/' + activeSurveyId + '/s/' + prevStep">
    <md-button class="md-raised md-primary" v-md-theme="'teal'">上一步</md-button>
  </router-link>
  <router-link :to="'/survey/index/id/' + activeSurveyId + '/s/' + nextStep">
    <md-button class="md-raised md-primary" v-md-theme="'teal'">下一步</md-button>
  </router-link>
</div>
</template>
<style>

</style>
<script>
  export default {
    name: 'surveyStep3',
    data () {
      var id = Number(this.$router.currentRoute.params.id) || 0
      var step = Number(this.$router.currentRoute.params.step) || 0
      return {
        step: step,
        activeSurveyId: id,
        nextStep: step + 1,
        prevStep: step - 1
      }
    },
    components: {
    }
  }
</script>
