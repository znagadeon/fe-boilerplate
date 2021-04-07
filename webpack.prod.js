const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
	mode: 'production',

	output: {
		filename: '[name]-[chunkhash:10].min.js',
	},

	devtool: 'source-map',

	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name]-[contenthash:10].min.css',
		}),
	],
});
