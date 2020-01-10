const path = require('path');

module.exports = {
	entry : './src/scripts/main.js',
	mode : 'development',
	devtool: 'eval-source-map',
	output : {
		path : path.resolve(__dirname, 'dist'),
		filename : 'scripts/bundle.js'
	},
	devServer: { 
		contentBase : './dist', 
		port : 8000 // default is 8080 
	}, 

	module : {
    rules: [
      {
        test: /\.(png|jpg|gif)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name : '[name].[ext]',
              outputPath : 'images/img'
            }
          }
        ]
      }
    ]
  }

}