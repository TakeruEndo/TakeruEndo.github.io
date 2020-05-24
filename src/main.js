import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import jQuery from 'jquery'
global.jquery = jQuery
global.$ = jQuery
window.$ = window.jQuery = require('jquery')

// bootstrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
