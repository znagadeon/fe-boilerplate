const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
	mode: 'development',
	devServer: {
		port: 1337,
		contentBase: './dist',
		open: true,
	},

	output: {
		filename: '[name].js',
	},

	devtool: 'inline-source-map',

	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
		}),
	],
});
