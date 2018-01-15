import Vue from 'vue'
import VueRouter from 'vue-router'
import { Button, Select } from 'element-ui'

import App from './App.vue'
import routers from './router/index.js'

Vue.use(VueRouter)
Vue.use(Button)
Vue.use(Select)

new Vue({
	routers,
  el: '#app',
  render: h => h(App)
})
