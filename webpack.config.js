const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Home',
      chunks: ['home'],
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/template/template.ejs'),
    }),
    new HtmlWebpackPlugin({
      title: 'login',
      chunks: ['login'],
      filename: 'login.html',
      template: path.resolve(__dirname, 'src/template/template.ejs'),
    }),
    new HtmlWebpackPlugin({
      title: 'register',
      chunks: ['register'],
      filename: 'register.html',
      template: path.resolve(__dirname, 'src/template/template.ejs'),
    }),
  ],

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
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    compress: true,
    port: 8080,
    historyApiFallback: {
      rewrites: [
        { from: /\/$/, to: '/index.html' },
        { from: /\/login$/, to: '/login.html' },
        { from: /\/register$/, to: '/register.html' }
      ]
    }
  }
};
