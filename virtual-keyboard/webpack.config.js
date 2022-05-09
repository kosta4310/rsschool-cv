const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { resolve } = require("path");
const { Hash } = require("crypto");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const isProduction = process.env.NODE_ENV == "production";
const config = {
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    new MiniCssExtractPlugin({filename: "[name].css"}),
    new HtmlWebpackPlugin({
      template: "index.html",
      chunks: ["index"],
    }),
    new CleanWebpackPlugin(),
   
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        
      },
    ],
  },
};

module.exports = ({isProduction}) => {
  if (!isProduction) {
    
    config.mode = "development";
    config.devtool = "source-map";
  } else {
    config.mode = "production";
  }
  return config;
};
