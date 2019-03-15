<template>
	<div class="container-fluid bg-info left">
		<ul class="bg-primary">
			<li>日志</li>
			<li>日志</li>
			<li>日志</li>
			<li>日志</li>
		</ul>
	</div>
</template>

<script>
	module.exports={
		data: function() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	div.left {
		height: 100vh;
		width: 275px;
		margin: 0px;
		z-index: 2;
	}
	ul {
		height: 80vh;
		margin-top:10vh;
		padding-left: 0;
	}
	li {
		height: 20vh;
		background: #555555;
		line-height: 20vh;
		list-style-type: none;
		text-align: center;
		border-bottom: 1px solid black;
	}
	li:hover {
		background: darkgray;
	}
</style>
