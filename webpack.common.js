const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    home: [
      path.resolve(__dirname, './src/assets/js/home.js'),
      path.resolve(__dirname, "./src/assets/styles/home.scss")
    ],
    internal: [
      path.resolve(__dirname, './src/assets/js/internal.js'),
      path.resolve(__dirname, "./src/assets/styles/internal.scss")
    ]
  },
  plugins : [
    new htmlWebpackPlugin({
      template : path.resolve(__dirname, "./src/assets/views/index.pug"),
      title : "Dragon Crypt - Form",
      filename : 'index.html',
      chunks : ["home"]
    }),
    new htmlWebpackPlugin({
      template : path.resolve(__dirname, "./src/assets/views/list.pug"),
      title : "Dragon Crypt - List",
      filename : 'list.html',
      chunks : ["internal"]
    }),
    new miniCssExtractPlugin({
      filename : `./assets/styles/[name].min.css`
    })
  ],
  module: {
    rules : [
      {
        test : /\.pug$/,
        use : [{
          loader : 'pug-loader',
          options : {
            pretty : true
          }
        }]
      },
      {
        test : /\.(sa|sc|c)ss$/,
        use : [
          miniCssExtractPlugin.loader,
          {loader: 'css-loader'},
          {loader: 'postcss-loader'},
          {loader: 'sass-loader'}
        ]
      },
      {
        test : /\.js$/,
        exclude : /node_modules/,
        use : {
          loader : 'babel-loader',
          options : {
            presets : ["@babel/preset-env"]
          }
        }
      },
      {
        test : /\.(png|jpg|gif|svg)$/,
        use : {
          loader : "file-loader",
          options : {
            name : path.resolve(__dirname, 'src/assets/images/[name].[ext]')
          }
        }
      }
    ]
  }
}