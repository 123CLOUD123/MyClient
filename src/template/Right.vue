<template>
	<div class="container-fluid right">
		right component
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
	}
</style>
