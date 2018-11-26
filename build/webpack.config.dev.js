const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const rootPath = path.join(__dirname, "../");

module.exports = {
  entry: "./src/index.js", //相对路径
  output: {
    filename: "bundle.js", //打包文件名
    path: path.resolve(rootPath, "./dist"), //打包文件的输出路径
    chunkFilename: "chunk.[name]-[hash:8].js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        loader: "eslint-loader",
        enforce: "pre",
        include: [path.resolve(__dirname, "../src")]
      },
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
  resolve: {
    extensions: [".js", ".jsx", ".json", ".coffee"],
    alias: {
      //别名
      util: __dirname + "/../src/common/util/index.js",
      "@": path.join(__dirname, "..", "src")
    }
  },
  devServer: {
    historyApiFallback: true,
    // host: '0.0.0.0',
    inline: true,
    disableHostCheck: true,
    hot: true,
    // noInfo: true,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html", //指定模板路径
      filename: "index.html", //指定文件名
      inject: "body"
    })
  ]
};
