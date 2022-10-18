const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require("vue-loader");
const {env} = require("process");

module.exports = {
	mode: env.prod ? "production" : "development",
	entry: [
		require.resolve(`webpack-dev-server/client`),
		path.resolve(__dirname, "./src/main.js")
	],
	// .filter(Boolean),
	output: {
		filename: 'main.js',
		path: path.join(__dirname, 'dist'),
		publicPath: "./"

	},
	resolve: {
		alias: {
			components: path.resolve(__dirname, 'src/components'),
			vue: "@vue/runtime-dom",
		},
		extensions: [".wasm", ".mjs", ".js", ".jsx", ".ts", ".tsx", ".json", ".vue"],
	},
	devServer: {
		static: {directory: path.join(__dirname, "dist")},
		port: 9000,
		open: true,
	},
	module: {
		rules: [
			// {
			// 	test: /\.png$/,
			// 	use: {
			// 		loader: "url-loader",
			// 		options: {limit: 8192}
			// 	}
			// },

			{
				test: /\.scss$/,
				use: [{
					loader: 'style-loader'
				},
				{
					loader: 'css-loader'
				},
				{
					loader: 'sass-loader'
				}
				]
			},
			{
				test: /\.svg$/,
				use: ['babel-loader', 'vue-svg-loader'],
			},
			{
				test: /(\.(png|jpeg|jpg|gif|webp)$|^((?!font).)*\.svg$)/,
				test: /(\.(png|jpeg|jpg|gif|webp|avif)$|^((?!font).)*\.svg$)/,
				use: [{
					loader: require.resolve('file-loader'),
					options: {
						esModule: false
					}
				}]
			},
			{
				test: /\.vue$/i,
				exclude: /(node_modules)/,
				use: {
					loader: "vue-loader",
				},
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ["@babel/preset-env"],
					},
				}
			},
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			filename: "[name].css"
		}),
		new HtmlWebpackPlugin({
			template: "./public/index.html"
		})],
	// devServer: {
	// 	historyApiFallback: true
	// }
};