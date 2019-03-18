<template>
	<div class="container-fluid bg-primary left">
		<div class="logo" @click="changePageType(0)">
			<span class="glyphicon glyphicon-cloud"></span>	
		</div>
		
		<ul>
			<li class="text-center" @click="changePageType(1)">我 的 日 志
			</li>
			<li class="text-center" @click="changePageType(2)">我 的 目 标
			</li>
		</ul>
	</div>
</template>

<script>
	var $ = jQuery = require("jquery");
	module.exports={
		data: function() {
			return {
				
			}
		},
		methods: {
			changePageType: function(pageType) {
				this.$emit("changePageType", pageType);
			}
		}
	}
</script>

<style scoped>
	div.left {
		height: 100vh;
		width: 100%;
	}
	ul {
		margin-top: 40px;
		padding-left: 0px;
	}
	li {
		font-size: 1.2em;
		list-style: none;
		/* list-style-position: inside; */
		font-weight: bold;
		height: 40px;
		line-height: 40px;
		transition: .2s;
	}
	li:hover {
		cursor:  pointer;
		border-bottom: 1px solid white;
		transform: scale(1.2);
	}
	div.logo{
		font-size: 6em;
		text-align: center;
		margin-top: 20px;
		animation:go 3s infinite;
	}
	div.logo:hover {
		cursor: pointer;
	}
	@keyframes go {
		0 {
			transform: scale(1);
		}
		50% {
			transform: scale(1.2);
		}
		100% {
			transform: scale(1);
		}
	}
</style>
