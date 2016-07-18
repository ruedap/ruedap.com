var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var customProperties = require('postcss-custom-properties');
var apply = require('postcss-apply');
var nested = require('postcss-nested');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css?modules&localIdentName=[name]-[local]---[hash:base64:21]',
          'postcss',
        ],
      },
    ]
  },
  postcss: function () {
      return [autoprefixer, customProperties, apply, nested];
  }
};
