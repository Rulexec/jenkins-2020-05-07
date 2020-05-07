const _path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let config = {
	mode: 'development',
	entry: _path.join(__dirname, 'src/main.js'),
	output: {
		path: _path.join(__dirname, 'dist'),
	},
	plugins: [new HtmlWebpackPlugin()],
};

module.exports = config;
