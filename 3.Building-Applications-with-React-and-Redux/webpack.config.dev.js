const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = "development";

module.exports = {
  //Webpack knows that he has to be in development mode:
  mode: "development",
  target: "web",
  //Source-map for debugging
  devtool: "cheap-module-source-map",
  entry: "./src/index",
  //Build an app:
  output: {
    path: path.resolve(__dirname, "build"),
    //Public web url to serve
    publicPath: "/",
    filename: "bundle.js"
  },

  devServer: {
    stats: "minimal",
    overlay: true,
    //All requests will send to index.html
    historyApiFallback: true,

    disableHostCheck: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    https: false
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.API_URL": JSON.stringify("http://localhost:3001")
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: "src/favicon.ico"
    })
  ],
  module: {
    rules: [
      {
        //look for js or jsx files
        test: /\.(js|jsx)$/,
        //ignore node_modules
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
