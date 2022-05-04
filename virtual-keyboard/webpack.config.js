// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { resolve } = require("path");
const { Hash } = require("crypto");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// ejs.renderFile(filename, data, options, function (err, str) {
//   // str => Rendered HTML string
// });

const isProduction = process.env.NODE_ENV == "production";

// const stylesHandler = isProduction
//   ? MiniCssExtractPlugin.loader
//   : "style-loader";

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
    new CopyPlugin({
      patterns: [{ from: "./src/assets", to: "assets" }],
    }),
    new CleanWebpackPlugin(),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
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
      // {
      //   test: /\.s[ac]ss$/i,
      //   use: [stylesHandler, "css-loader", "sass-loader"],
      // },
      // {
      //   test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
      //   type: "asset/resourse",
      // },
      // {
      //   test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
      //   type: "asset/resource",
      //   generator: {
      //     filename: "assets/images/[name][ext]",
      //   },
      // },
      // {
      //   test: /\.(woff(2)?|eot|ttf|otf)$/i,
      //   type: "asset/resource",
      //   generator: {
      //     filename: "assets/fonts/[hash][ext]",
      //   },
      // },
      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

module.exports = ({isProduction}) => {
  if (!isProduction) {
    
config.mode = "development";
    config.devtool = "source-map";
    // config.plugins.push(new MiniCssExtractPlugin());
  } else {
    config.mode = "production";
  }
  
  return config;
};
