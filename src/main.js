import Vue from 'vue'
import App from './App'
import router from './router'

// 引入全局的CSS样式
import './assets/css/global.css'
// 引入element-ui组件库模块
import ElementUI from 'element-ui'
// 引入阿里妈妈图标库
import './assets/fonts/iconfont.css'
// 引入axios
import axios from 'axios'

// axios请求跟地址
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'

// 给axios配置给Vue的$http成员
Vue.prototype.$http = axios

// 把element-ui注册给Vue
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
