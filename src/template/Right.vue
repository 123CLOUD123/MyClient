<template>
	<div class="container-fluid right">
		right component
		<div class="box bg-primary">
			
		</div>
	</div>
</template>

<script>
	module.exports={
		data: function() {
			return {
				
			}
		},
		components: {
		},
		methods: {
			
		}
	}
</script>

<style>
	div.right {
		width: 100%;
		height: 100vh;
		margin-top : -100vh;
		padding-left: 300px;
		z-index: -1;
		position: relative;
		padding-top: 0;
	}
	div.box {
		width: 300px;
		height:200px;
		margin-top: 30%;
		margin-left: 50%;
		transform: translate(-50%, -50%);
	}
</style>
