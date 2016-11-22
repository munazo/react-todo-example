var path = require('path');
 
var config = {
  context: path.join(__dirname, 'src/'),
  entry: [
    './main.js',
  ],
  output: {
    path: path.join(__dirname, 'public/'),
    filename: 'main.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
      { 
        test: /\.css$/, 
        loaders: ['style', 'css']
      },
      {
        test: /\.styl$/,
        loaders: ['style', 'css', 'stylus']
      },
    ],
    preLoaders: [
      {
        test: /\.styl$/, 
        loaders: ['stylint']
      },
      {
        test: /\.js$/, 
        exclude: /node_modules/,
        loaders: ['eslint']
      }
    ]
  },
  resolveLoader: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  resolve: {
    extensions: ['', '.js', '.css', '.styl'],
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  stylint: {
    config: '.stylintrc'
  },
  eslint: {
    configFile: '.eslintrc'
  }
};
module.exports = config;