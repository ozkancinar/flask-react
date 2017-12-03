var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/js');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: {
    app: APP_DIR + '/App.jsx',
    content: APP_DIR + '/Content.jsx',
    index: APP_DIR + '/index.js'
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js'
  },
  module: {
  	loaders: [
  	{ 
  		test: /\.(js|jsx)?$/,
  		include: APP_DIR,
      exclude: /node_modules/,
  	  loader: 'babel-loader',
    query: 
      {
        presets:['es2015', 'react']
      }
  	}
  	]
  }

};

module.exports = config;