const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: 'development',
  devtool : "inline-source-map", // Choose a style of source mapping
  devServer : {
    contentBase : "./src",
    compress: true, // Active gzip
    port : 3000,
    https : true,
    host : "",
    open : true
  }
});