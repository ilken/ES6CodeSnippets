var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./js/scripts.js",
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: [ 'es2015', 'stage-0'],
          plugins: ['transform-decorators-legacy', 'transform-class-properties'],
        }
      }
    ]
  },
  output: {
    path: __dirname + "/js/",
    filename: "scripts.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
