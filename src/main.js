import Vue from 'vue'
import VueRouter from 'vue-router'
import { Button, Select } from 'element-ui'
import axios from 'axios'


import App from './App.vue'
import routes from './router/index.js'
import data from './mock'
// 引入mockjs
//require('./mock.js')



Vue.prototype.$http = axios

// 0. 如果使用模块化机制编程，導入Vue和VueRouter，要调用 Vue.use(VueRouter)
Vue.use(VueRouter)
Vue.use(Button)
Vue.use(Select)

const router=new VueRouter(routes)

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
new Vue({
	router,
  el: '#app',
  render: h => h(App)
})

