var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var extractSCSS = new ExtractTextPlugin('style.css')

module.exports = {
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.[hash:8].js',
  },
  externals: {
    'react':'React',
    'react-dom':'ReactDOM'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    extractSCSS,
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),    
   new webpack.optimize.UglifyJsPlugin()
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
