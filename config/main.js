import Vue from 'Vue';
import App from '../src/App.vue';
import VueRouter from 'vue-router';
var routejs = require("./route.js");
Vue.use(VueRouter);
var router = new VueRouter({
	routes: routejs.routes
})

// import jQuery from "jquery";
// var $ = jQuery;

new Vue({
	el: "#app",
	render: h=>h(App),
	router
})