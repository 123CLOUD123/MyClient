<template>
	<div>
		<button class="btn btn-primary" @click="test">测试</button>
		<h1>结果： {{result}}</h1>
	</div>
</template>

<script>
	var $ = jQuery = require("jquery");
	module.exports={
		data: function() {
			return {
				result: "",
			}
		},
		methods: {
			test: function() {
			    var _self = this;
			    $.ajax({
			        type: "post",
			        url: "api/userResource/login",
					data: {
						name: "ZhangHao",
						password: "ZhangHao",
					},
			        success: function(data) {
						_self.result = data;
			        }
			    })
			   
			}
		}
	}
</script>

<style>
</style>
