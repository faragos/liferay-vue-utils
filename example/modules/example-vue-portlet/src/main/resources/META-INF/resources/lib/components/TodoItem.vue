<template>
  <li>{{ todo.text }}<a href="/">tesdsd</a></li>
</template>

<script>
  export default {
    name: 'TodoItem',
    props: ['todo']
  }
</script>
<style lang="scss" scoped>
  li {
    font-size: 2em;
    text-align: center;

    a {
      padding: 10px;
    }
  }
</style>