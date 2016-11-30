<template>
  <div>
    <div v-if="step === 1">
      <survey-step-1></survey-step-1>
    </div>
    <div v-else-if="step === 2">
      <survey-step-2></survey-step-2>
    </div>
    <div v-else-if="step === 3">
      <survey-step-3></survey-step-3>
    </div>
    <div v-else-if="step === 4">
      <survey-step-4></survey-step-4>
    </div>
    <div v-else-if="step === 5">
      <survey-step-5></survey-step-5>
    </div>
    <div v-else-if="step === 6">
      <survey-step-6></survey-step-6>
    </div>
    <div v-else-if="step === 7">
      <survey-step-7></survey-step-7>
    </div>
    <div v-else>
      <survey-step-8></survey-step-8>
    </div>
  </div>
</template>
<style scoped lang="scss">

</style>
<script>
  import surveyStep1 from './surveyStep1.vue'
  import surveyStep2 from './surveyStep2.vue'
  import surveyStep3 from './surveyStep3.vue'
  import surveyStep4 from './surveyStep4.vue'
  import surveyStep5 from './surveyStep5.vue'
  import surveyStep6 from './surveyStep6.vue'
  import surveyStep7 from './surveyStep7.vue'
  import surveyStep8 from './surveyStep8.vue'
  export default {
    name: 'surveyStep',
    data () {
      var id = Number(this.$router.currentRoute.params.id) || 0
      var step = Number(this.$router.currentRoute.params.step) || 0
      return {
        step: step,
        activeSurveyId: id
      }
    },
    components: {
      surveyStep1,
      surveyStep2,
      surveyStep3,
      surveyStep4,
      surveyStep5,
      surveyStep6,
      surveyStep7,
      surveyStep8
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
