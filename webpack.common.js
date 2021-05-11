const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: __dirname,
	entry: {
		bundle: './src/main.ts',
	},

	output: {
		publicPath: '/',
		path: `${__dirname}/dist`,
	},

	module: {
		rules: [{
			test: /\.ts$/,
			loader: 'ts-loader',
			exclude: /node_modules/,
		}, {
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
		}, {
			test: /\.s?css$/,
			use: [
				MiniCssExtractPlugin.loader,
				'css-loader',
				'postcss-loader',
				'sass-loader',
			],
		}],
	},

	resolve: {
		extensions: ['.ts', '.js'],
	},

	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './src/layout.html',
			filename: 'index.html',
		}),
	],
};
