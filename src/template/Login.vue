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
								<input type="password" class="form-control input-lg" v-model="password" @keyup.enter="login">
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
	var $ = jQuery = require("jquery");
	module.exports={
		data: function() {
			return {
				username: "",
				password: "",
				result: "",
			}
		},
		methods: {
// 			login: function() {
// 				this.$router.push("/index");
// 			},
			
			/** 测试 */
			login: function() {
			    var _self = this;
				if (!this.username || !this.password) {
					alert("未填写完整。");
					return;
				}
			    $.ajax({
			        type: "post",
			        url: "api/userResource/login",
					data: {
						name: _self.username,
						password: _self.password,
					},
			        success: function(data) {
						if (data) {
							// alert("登陆成功!");
							// $.cookie("username", data.name);
							// document.cookie = "username=" + data.name;
							_self.$router.push("/dashboard");
						} else {
							alert("用户不正确");
						}
			        }
			    })
			   
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
		background: dimgrey;
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
