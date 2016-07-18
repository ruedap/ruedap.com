var path = require('path');
var webpack = require('webpack');
var common = require('./webpack.common');

var copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'static/bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: common.loaders
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new copyWebpackPlugin(
      [
        { from: './static/', to: './static' },
        { from: './index.html', to: './' },
        { from: './CNAME', to: './' },
      ],
      {
        ignore: [
          '.DS_Store',
          '.gitkeep'
        ]
      }
    )
  ],
  postcss: common.postcss
};
