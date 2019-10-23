const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  entry: ["./src/js/main.js"],
  watch: true,
  output: {
    path: path.resolve(__dirname),
    filename: 'main.js',
  },
  devServer: {
    host: '0.0.0.0',
    port: '9000',
    contentBase: path.resolve(__dirname),
    overlay: true,
    watchContentBase: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ] 
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Hackerrank practice viewer',
        template: './src/index.html',
        inject: true,
        minify: {
            removeComments: true,
            collapseWhitespace: true
        }
    })
  ]
}