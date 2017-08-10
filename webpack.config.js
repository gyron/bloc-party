// $ npm install webpack ts-loader --save-dev
const path = require('path');

module.exports = {
	entry: './src/index.ts',
	resolve: {
		// Add '.ts' and '.tsx' as a resolvable extension.
		extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
	},
	module: {
		loaders: [
			// all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
			{ test: /\.tsx?$/, loader: "ts-loader" }
		]
	},
	output: {
		filename: 'bloc-party.js',
		path: path.resolve(__dirname, 'dist'),

		// https://webpack.js.org/configuration/output/#output-librarytarget

		library: "", // leaving it empty puts it direct into window.
		//libraryTarget: 'umd', // would be what to use if not using window
		libraryTarget: 'window'//, // var does not work with an empty library name
		//umdNamedDefine: false // changing value has no effect unless using umd
	},
	externals: {
		"jquery": "jQuery"
	}
};