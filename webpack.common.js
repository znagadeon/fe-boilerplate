const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: __dirname,
	entry: {
		bundle: './src/main.js',
	},

	output: {
		publicPath: '/',
		path: `${__dirname}/dist`,
	},

	module: {
		rules: [{
			test: /\.js$/,
			loader: 'babel-loader',
		}, {
			test: /\.s?css$/,
			use: [
				MiniCssExtractPlugin.loader,
				'css-loader',
				'sass-loader',
			],
		}],
	},

	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './src/layout.html',
			filename: 'index.html',
		}),
	],
};
