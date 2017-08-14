const path = require('path');
const webpack = require('webpack');

module.exports = {  
  entry: {
    home: path.resolve(__dirname, 'src/modules/home/index.js'),
    login: path.resolve(__dirname, 'src/modules/home/Login.js'),
    register: path.resolve(__dirname, 'src/modules/home/Register.js'),
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },

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
