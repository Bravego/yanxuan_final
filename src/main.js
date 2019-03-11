//入口文件
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './store'
import './mock/mockServer'
//适配
import 'lib-flexible/flexible'
Vue.config.productionTip = false


new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
