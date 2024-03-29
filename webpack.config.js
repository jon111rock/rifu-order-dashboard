const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.join(__dirname, "/dist"),
    filename: "main.js",
    clean: true,
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.(js||jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(css|sass|less|scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(gif|svg|jpg|png)$/,
        loader: "file-loader",
      },
    ],
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  devServer: {
    open: true,
  },
};
