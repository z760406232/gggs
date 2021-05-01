import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/index.vue'
import Author from '../components/author.vue'
Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: '/author',
		component: Author,
	},
	{
		path: '/author',
		name: 'Author',
		component: Author
	},
	{
		path: '/home',
		name: 'Home',
		component: Index
	},
	{
		path: '/regist',
		name: 'Regist',
		component: () => import('../components/regist.vue'),
		children: [{
			path: '/regist/index',
			name: 'RegistIndex',
			component: () => import('../components/sing.vue')
		}]
	}, {

		path: '/added',
		name: 'Added',
		component: () => import('../components/added.vue'),
	}, {
		path: '/contcact',
		name: 'Contcact',
		component: () => import('../components/contcact.vue')
	},
	{
		path: '/orderlist',
		name: 'Orderlist',
		component: () => import('../components/orderlist.vue')
	}

]

const router = new VueRouter({
	routes
})



export default router
