<template>
  <ol>
    <todo-item
        v-bind:key="item.id"
        v-bind:todo="item"
        v-for="item in groceryList"
    />
  </ol>
</template>


<script>
  import TodoItem from './TodoItem'

  export default {
    components: {TodoItem},
    name: 'Todo',
    data () {
      return {
        groceryList: [
          {id: 0, text: 'Vegetables'},
          {id: 1, text: 'Cheese'},
          {id: 2, text: 'Whatever else humans are supposed to eat'},
        ],
      }
    }
  }
</script>
<style lang="scss" scoped>
  ol {
    margin: 10px;
  }
</style>