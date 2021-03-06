import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Contribute from '@/components/Contribute';
import Build from '@/components/Build';
import BuildNetCore from '@/components/Build.Net_Core';
import Compatibility from '@/components/Compatibility';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/contribute',
			name: 'Contribute',
			component: Contribute
		},
		{
			path: '/Build',
			name: 'Build',
			component: Build
		},
		{
			path: '/Build/NetCore',
			name: 'BuildNetCore',
			component: BuildNetCore
		},
		{
			path: '/Compatibility',
			name: 'Compatibility',
			component: Compatibility
		}
	]
});
