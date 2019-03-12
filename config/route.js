module.exports = {
	routes: [
        { path: '/', component: resolve => require.ensure([], () => resolve(require('../src/template/Index.vue')), 'client')},
        { path: '/as', component: resolve => require.ensure([], () => resolve(require('../src/template/Index.vue')), 'client')},
	]
}