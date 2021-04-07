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

	plugins: [
		new CleanWebpackPlugin(),
	],
};
