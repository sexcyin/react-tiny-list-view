const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const rootPath = path.join(__dirname, "../");

module.exports = {
  entry: "./src/index.js", //相对路径
  output: {
    filename: "bundle.js", //打包文件名
    path: path.resolve(rootPath, "./dist"), //打包文件的输出路径
    chunkFilename: "chunk.[name]-[hash:8].js"
  },
  mode: "production",
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
  plugins: [
    new CleanWebpackPlugin(
      ["dist/*"], //匹配删除的文件
      {
        root: path.resolve(__dirname, "../"), //根目录
        verbose: false, //开启在控制台输出信息
        dry: false //启用删除文件
      }
    )
  ]
};
