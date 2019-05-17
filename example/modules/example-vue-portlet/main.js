// ONLY USED FOR WEBPACK

import 'idempotent-babel-polyfill'
import exposed from './src/main/resources/META-INF/resources/lib/index.es'
import components from './public/vueComponents'

var Vue = exposed.Vue
var main = {}
main.default = {}
main.default.components = exposed.components

Vue.config.productionTip = false
Vue.config.devtools = true

components.forEach(function (c) {
  if (c.content) {
    eval(c.content)
  } else {
    new Vue({
      el: '#' + c.id,
      components: exposed.components
    })
  }
})
