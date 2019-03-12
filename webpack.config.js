var webpack = require("webpack");
var path = require("path");
var VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
	entry: "./config/main.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "./dist"),
		publicPath: "/dist/"
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			},
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /node_modules/
			},
			{
				test: /\.vue$/,
				loader: "vue-loader"
			}
		]
	},
	plugins: [
        new VueLoaderPlugin()
        // new webpack.ProvidePlugin({
        //     $: "jquery",
        //     jQuery: "jquery"
        //  })
    ],
    
    devServer: {
        proxy: {
          '/api': {
            target: 'http://localhost:8080',
            pathRewrite: {'^/api' : ''},
            // changeOrigin: true,     // target是域名的话，需要这个参数，
            // secure: false,          // 设置支持https协议的代理
          },
        }
    }
}