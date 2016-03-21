module.exports = {
	entry: "./app/assets/frontend/main.jsx",
	output: {
		path: __dirname + "/app/assets/javascripts",
		filename: "bundle.js"
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{ 
				test: /\.jsx$/,
				exclude: /(node_modules|bower_components)/,
			 	loader: "babel-loader",
			 	query:
      	{
        	presets: ['react', 'es2015', 'stage-0'],
        	plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
      	}
      }
		]
	}
};