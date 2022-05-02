const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env, options) => {
  const isProduction = options.mode === "production";
  const config = {
    mode: isProduction ? "production" : "development",
    devtool: isProduction ? "none" : "source-map",
    watch: !isProduction,
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
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
      ],
    },
    plugins: [new CleanWebpackPlugin()],
  };

  return config;
};
