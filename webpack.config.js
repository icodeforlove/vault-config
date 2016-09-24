module.exports = {
	target: 'node',
	node: {
		__dirname: false,
		__filename: false
	},
	entry: './src/index',
	output: {
		path: __dirname + '/dist',
		libraryTarget: 'commonjs2',
		filename: 'index.js'
	},
	externals: [require('webpack-node-externals')()],
	module: {
		loaders: [
			{test: /\.js$/, loader: 'babel-loader'}
		]
	},
	devtool: 'inline-source-map'
};