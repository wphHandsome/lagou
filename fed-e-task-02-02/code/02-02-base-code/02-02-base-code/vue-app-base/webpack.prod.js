const path = require('path')
const common = require('./webpack.common')
const merge = require('webpack-merge')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  plugins: [
    new CopyWebpackPlugin([
      path.resolve(__dirname, 'public/favicon.ico')
    ]),
    new CleanWebpackPlugin()
  ]
})
