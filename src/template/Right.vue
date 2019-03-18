<template>
	<div class="container-fluid right bg-info">
		<transition name="fade">
			<Article v-if="pageType==1"></Article>
			<Goal v-if="pageType==2"></Goal>
		</transition>
	</div>
</template>

<script>
	var Article = require("./Article.vue").default;
	var Goal = require("./Goal.vue").default;
	module.exports={
		props: ["pageType"],
		data: function() {
			return {
				
			}
		},
		components: {
			Article,
			Goal,
		},
		methods: {
		}
	}
</script>

<style>
	div.right {
		width: 100%;
		height: 100vh;
	}
	.fade-enter {
		transform: translateY(-100%);
	}
	.fade-enter-to {
		transform: translateY(00px);
	}
	.fade-enter-active {
		transition:  .3s;
	}
</style>
