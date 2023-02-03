const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: {
      index: path.resolve(__dirname, "main", "index.js")
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
              MiniCssExtractPlugin.loader,
              "css-loader",
              "sass-loader",
          ]
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader"
          ]
        },
        {
          test: /\.html$/i,
          loader: "html-loader",
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(js|jsx)$/,
          enforce: 'pre',
          // exclude: /node_modules/,
          use: ["babel-loader", "source-map-loader"],
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, "main", "index.html"),
        chunks: ['index']
      }),
      new MiniCssExtractPlugin()
    ],
    devServer:{
      hot: false,
      historyApiFallback: true,
    }
}
