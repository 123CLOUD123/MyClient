<template>
    <div>
        hello world 123
        <button @click="test">測試</button>
        <div>{{result}}</div>
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

