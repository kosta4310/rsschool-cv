const webpack = require("webpack");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, options) => {
  const isProduction = options.mode === "production";

  const config = {
    mode: isProduction ? "production" : "development",
    devtool: isProduction ? "none" : "source-map",
    //  watch: !isProduction,

    entry: {
      index: "./src/pages/main/index.js",
      pets: "./src/pages/pets/pets.js",
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].js",
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            /*MiniCssExtractPlugin.loader,*/
            "style-loader",
            "css-loader",
            "sass-loader",
          ],
        },
        { test: /\.css$/, use: "css-loader" },
        { test: /\.ts$/, use: "ts-loader" },
        // {
        //   test: /\.m?js$/,
        //   exclude: /(node_modules|bower_components)/,
        //   use: {
        //     loader: "babel-loader",
        //     options: {
        //       presets: ["@babel/preset-env"],
        //     },
        //   },
        // },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({ filename: "style.css" }),
    ],
  };

  return config;
};
