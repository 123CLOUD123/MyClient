<template>
    <div class="container-fluid">
        <!-- hello world 123
        <button @click="test" class="btn btn-primary">測試</button>
        <div>{{result}}</div> -->
		<h1 class="text-center">Hello World</h1>
		<hr>
		<div class="row">
			<div class="form-group">
				<label class="col-sm-2">用户名：</label>
				<div class="col-sm-10">
					<input type="text" class="form-control">
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
                result: "bbb",
            }
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

