const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    appServer: path.resolve(__dirname, './server/index.js'),
  },

  output: {
    path: path.resolve(__dirname, 'server'),
    filename: '[name].bundle.js',
  },

  target: 'node',

  externals: [],

  plugins: [],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
          },
        },
      },
    ],
  },
};
