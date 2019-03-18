<template>
    <div class="container-fluid dashboard">
		<div class="col-md-2 col-sm-4 col-xs-6">
			<Left @changePageType="changePageType"></Left>
		</div>
		<div class="col-md-10 col-sm-8 col-xs-6">
			<Right :pageType="pageType"></Right>
		</div>
    </div>
</template>

<script>
    var $ = jQuery = require("jquery");
	var Left = require("./Left.vue").default;
	var Right = require("./Right.vue").default;
    module.exports={
        data: function() {
            return {
				pageType: 0,
            }
        },
		components: {
			Left,
			Right,
		},
        methods: {
            changePageType: function(data) {
				this.pageType = data;
			}
        }
    }
</script>

<style scoped>
	div.dashboard {
		background-color: #337ab7 ;
	}
</style>

