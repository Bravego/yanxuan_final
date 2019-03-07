import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

//使用VueRouter
Vue.use(VueRouter)

//注册路由
export default new VueRouter({
  mode:'history',
  routes
})
