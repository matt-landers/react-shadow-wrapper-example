var path = require('path');

module.exports = {
	entry: './app.tsx',
	output: {
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	module: {
		loaders: [
			{ test: /\.tsx$/, loader: 'ts-loader' }
		]
	}
}