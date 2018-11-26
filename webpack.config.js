const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: "[name].js", //打包文件名
    path: path.resolve(__dirname, "lib"), //打包文件的输出路径
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }, //同时支持es6 react
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['lib'])
  ]
};
