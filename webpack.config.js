const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require("vue-loader");

module.exports = {
	mode: 'development',
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		alias: {
			components: path.resolve(__dirname, 'src/components'),
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
	plugins: [new VueLoaderPlugin(),
	new MiniCssExtractPlugin(),
	new HtmlWebpackPlugin({
		template: "./public/index.html"
	})]
};