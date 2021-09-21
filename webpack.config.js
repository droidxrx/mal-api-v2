const { resolve } = require('path')
/** @type { import("webpack").WebpackOptionsNormalized } */
const configWebpack = {
	mode: 'production',
	entry: resolve('src/index.js'),
	output: {
		filename: 'index.js',
		path: resolve('lib'),
		library: {
			type: 'commonjs2'
		}
	},
	externals: {
		crypto: 'crypto',
		superagent: 'superagent',
		'query-string': 'query-string'
	},
	watch: true,
	watchOptions: {
		ignored: [resolve('node_modules'), resolve('lib')]
	},
	devtool: false,
	cache: false
}
module.exports = configWebpack
