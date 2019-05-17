<%@ include file="/init.jsp" %>

<div id="my-vue-id" data-portlet-type="vue">
  <div>
  </div>
</div>

<script>
  Liferay.Loader.require('example-vue-portlet/lib/index.common', function (main) {
    var Vue = main.default.Vue
    new Vue({
      el: 'my-vue-id',
      components: main.default.components
    })
  })
</script>