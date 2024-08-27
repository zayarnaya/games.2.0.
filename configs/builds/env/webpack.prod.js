const path = require('path');
const MiniCssExtractPluginInstance = require('../../plugins/MiniCssExtractPlugin');
const envPlugin = require('../../plugins/DefinePlugin')('production');
const styles = require('../../rules/styles')(true);
const styles_modules = require('../../rules/style_modules')(true);

module.exports = {
	mode: 'production',
	entry: {
		index: path.resolve(__dirname, './../../../src/index.js'),
	},
	output: {
		filename: '[name].[fullhash].js',
		path: path.resolve(__dirname, './../../../build'),
		clean: true,
		assetModuleFilename: path.join('assets', '[name].[contenthash][ext]'),
	},
	plugins: [envPlugin, MiniCssExtractPluginInstance],
	module: {
		rules: [styles, styles_modules],
	},
	optimization: {
		splitChunks: {
			maxSize: 25000,
			chunks: 'all',
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor',
				},
			},
		},
	},
};
