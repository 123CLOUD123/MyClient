module.exports = {
	routes: [
        { path: '/', component: resolve => require.ensure([], () => resolve(require('../src/template/Login.vue')), 'client')},
        { path: '/index', component: resolve => require.ensure([], () => resolve(require('../src/template/Index.vue')), 'client')},
	]
}