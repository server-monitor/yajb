var path = require('path');

var config = {
  // The entry point file path created in the previous step.
  context: path.join(__dirname, 'src'),

  // The entry point file relative to context.
  entry: [
    './index.js',
  ],

  // Add debugging info, also try inline-source-map.
  //   See https://webpack.github.io/docs/configuration.html
  devtool: 'source-map',

  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
    ],
  },
  resolveLoader: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  resolve: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};
module.exports = config;
