<template>
  <div>
    <p>{{ greeting }} World!</p>

    <introduction-component/>
  </div>
</template>

<script>
  import IntroductionComponent from './IntroductionComponent.vue'

  module.exports = {
    data () {
      return {
        greeting: 'Hello'
      }
    },
    components: {
      IntroductionComponent
    }
  }
</script>

<style lang="scss" scoped>
  p {
    font-size: 2em;
    text-align: center;
  }
</style>