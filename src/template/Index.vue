<template>
    <div class="container-fluid">
			<Left></Left>
			<Right></Right>
    </div>
</template>

<script>
    var $ = jQuery = require("jquery");
	var Left = require("./Left.vue").default;
	var Right = require("./Right.vue").default;
    module.exports={
        data: function() {
            return {
                result: "bbb",
            }
        },
		components: {
			Left,
			Right,
		},
        methods: {
            
        }
    }
</script>

<style scoped>
</style>

