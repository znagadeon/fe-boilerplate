const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
		}],
	},

	plugins: [
		new CleanWebpackPlugin(),
	],
};
