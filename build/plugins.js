const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = [
  new HtmlWebpackPlugin({
    template: "build/template/index.html",
    inject: true,
  }),
];
