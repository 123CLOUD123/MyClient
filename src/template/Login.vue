<template>
	<div class="container-fluid" style="padding: 0">
		<div class="main-container bg-info">
			<div class="form bg-primary" style="padding: 0">
				<div class="row text-center">
					<h1>Hello World</h1>
					<div class="row">
						<div class="form-group group1">
							<label class="col-sm-3 col-xs-3">用户名：</label>
							<div class="col-sm-8 col-xs-8">
								<input type="text" class="form-control input-lg" v-model="username">
							</div>
						</div>
						<div class="form-group group2">
							<label class="col-sm-3 col-xs-3">密码：</label>
							<div class="col-sm-8 col-xs-8">
								<input type="password" class="form-control input-lg" v-model="password">
							</div>
						</div>
						<div class="form-group group3">
							<button class="btn btn-default btn-lg" @click="login">登陆</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
	
<script>
	// var $ = jQuery = require("jquery");
	module.exports={
		data: function() {
			return {
				username: "",
				password: "",
			}
		},
		methods: {
			login: function() {
				this.$router.push("/index");
			}
		},
		
	}
</script>

<style>
	.main-container {
		width: 100vw;
		height: 100vh;
		padding-top: 20vh;
		overflow: hidden;
	}
	.form {
		width: 600px;
		height: 350px;
		margin-left: 48%;
		transform: translateX(-50%);
		border-radius: 15px;
	}
	.group1 {
		margin-top: 30px;
	}
	.group1 ,.group2 ,.group3 {
		height: 50px;
	}
	label {
		font-size: 1.8em;
		text-align: right;
	}
</style>
