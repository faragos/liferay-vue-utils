<template>
  <p class="name">My name is {{ name }}!</p>
</template>

<script>
  module.exports = {
    data () {
      return {
        name: 'Test'
      }
    }
  }
</script>