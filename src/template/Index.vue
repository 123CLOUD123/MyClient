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
            test: function() {
                // var aaa = document.getElementById("a");
                // // aaa.hide();
                // $("#a").hide();
                var _self = this;
                $.ajax({
                    type: "get",
                    url: "api/myapp/myresource",
                    success: function(data) {
                        _self.result = data;
                    }
                })
               
            }
        }
    }
</script>

<style scoped>
</style>

