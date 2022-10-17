import {createRouter, createWebHistory} from "vue-router"
import GoodsView from '../views/GoodsView'
const routerHistory = createWebHistory()

const routers = createRouter({
	history: routerHistory,
	routes: [
		{
			path: '/',
			name: 'main',
			component: GoodsView
		}
	]
})

export default routers