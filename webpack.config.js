var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var extractSCSS = new ExtractTextPlugin('style.css')

module.exports = {
  //devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  externals: {
    'react':'React',
    'react-dom':'ReactDOM'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    extractSCSS,
   // new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      },{
          test   : /\.(scss|css)/,
          exclude: [/node_modules/],
          loader : extractSCSS.extract('style', 'css!autoprefixer!sass!css-path-loader')
      }     
    ]
  }
}
