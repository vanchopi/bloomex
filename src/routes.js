import VueRouter from 'vue-router'
import Filtered from './components/Filtered'

export default new VueRouter({
	routes:[
		{
			path:'/Filtered',
			component: Filtered,
			name: 'filtered'
		}/*,
		{
			path:'/404',
			component: ErrorCmp,
			name:'404'
		}*/
	]
})
