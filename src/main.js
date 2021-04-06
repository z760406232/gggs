import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from 'axios'

Vue.prototype.$axios = axios;
// Vue.use(axios)
Vue.use(Vant);
Vue.config.productionTip = false
axios.defaults.baseURL = 'http://127.0.0.1:8081/admin/'

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
