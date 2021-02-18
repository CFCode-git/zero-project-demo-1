const { resolve } = require("./utils");
const jsRules = require("./rules/jsRules");
const styleRules = require("./rules/styleRules");
const plugins = require("./plugins");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

/**
 * @type {import('webpack').Configuration}
 */

module.exports = {
  entry: {
    app: resolve("src/index.tsx"),
  },
  output: {
    path: resolve("dist"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
    // alias: {
    //   "@views": resolve("src/containers/views"),
    //   "@shared": resolve("src/containers/shared"),
    // },
    plugins: [
      new TsconfigPathsPlugin({
        // 配置文件引入tsconfig.json
        configFile: resolve("tsconfig.json"),
      }),
    ],
  },
  module: {
    rules: [...jsRules, ...styleRules],
  },
  plugins: [...plugins],
};
