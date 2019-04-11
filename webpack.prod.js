const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const uglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");
const copyWebpackPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new uglifyjsWebpackPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
    ]
  },
  plugins: [
    new cleanWebpackPlugin(["dist"]),
    new copyWebpackPlugin([
      {
        from: path.resolve(__dirname, "src/assets/images/"),
        to: path.resolve(__dirname, 'dist/assets/images'),
        cache: true
      }
    ])
  ],
  output: {
    filename : `assets/js/app.min.js`,
    path: path.resolve(__dirname, 'dist')
  }
});