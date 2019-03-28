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
		overflow-y: scroll;
	}
	div.right::-webkit-scrollbar {
		width: 8px;
        height: 1px;
	}
	div.right::-webkit-scrollbar-thumb {
		border-radius: 10px;
		box-shadow: inset 0 0 5px #337AB7;
		background:  dimgray;
	}
	div.right::-webkit-scrollbar-track {
		box-shadow: inset 0 0 5px black;
		border-radius: 10px;
		background: #EDEDED;
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
