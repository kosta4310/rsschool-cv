const webpack = require("webpack");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, options) => {
  const isProduction = options.mode === "production";

  const config = {
    mode: isProduction ? "production" : "development",
    devtool: isProduction ? "nosources-source-map" : "source-map",
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
            MiniCssExtractPlugin.loader,
            // "style-loader",
            "css-loader",
            "sass-loader",
          ],
        },
        { test: /\.css$/, use: "css-loader" },
        { test: /\.ts$/, use: "ts-loader" },

        {
          test: /.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
          type: "asset/resource",
        },

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

      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./src/pages/main/index.html",
        minify: false,
        inject: "body",
        chunks: ["index"],
      }),
      new HtmlWebpackPlugin({
        filename: "pets.html",
        template: "./src/pages/pets/pets.html",
        minify: false,
        inject: "body",
        chunks: ["pets"],
      }),
      new MiniCssExtractPlugin({ filename: "[name].css" }),
      new CopyPlugin({
        patterns: [
          { from: "./src/assets/pets", to: "./dist/img" },
          // { from: "other", to: "public" },
        ],
      }),
    ],
  };

  return config;
};
