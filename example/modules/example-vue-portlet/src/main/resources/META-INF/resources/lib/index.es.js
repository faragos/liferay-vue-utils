import 'idempotent-babel-polyfill'
import Vue from 'vue/dist/vue.common'
import Todo from './components/Todo'

export default {
  Vue: Vue,
  components: {
    Todo: Todo
  }
}