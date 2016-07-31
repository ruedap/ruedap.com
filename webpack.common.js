var path = require('path');

var autoprefixer = require('autoprefixer');
var customProperties = require('postcss-custom-properties');
var apply = require('postcss-apply');
var nested = require('postcss-nested');

module.exports = {
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
        'css?modules&localIdentName=[name]-[local]---[hash:base64:6]',
        'postcss',
      ],
    },
  ],
  postcss: function () {
      return [autoprefixer, customProperties, apply, nested];
  },
};
