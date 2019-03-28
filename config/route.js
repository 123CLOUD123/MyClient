module.exports = {
	routes: [
        { path: '/', component: resolve => require.ensure([], () => resolve(require('../src/template/Login.vue')), 'client')},
        { path: '/dashboard', component: resolve => require.ensure([], () => resolve(require('../src/template/Dashboard.vue')), 'client')},
		{ path: '/test', component: resolve => require.ensure([], () => resolve(require('../src/Test.vue')), 'client')},
	]
}