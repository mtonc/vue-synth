// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import '../semantic/dist/semantic.min.css'
import '../semantic/dist/semantic.min.js'
import $ from'jquery'
import "../node_modules/jquery-ui/ui/widgets/slider.js"
import "../node_modules/jquery-ui/themes/base/slider.css"
import "../node_modules/jquery-ui/themes/base/all.css"
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
