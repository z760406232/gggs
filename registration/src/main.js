import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/js/vant.js'
import 'vant/lib/index.css';
/* 引入资源请求插件 */
// import axios from 'axios'
import VueResource from 'vue-resource'
/* 使用VueResource插件 */
Vue.use(VueResource)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
