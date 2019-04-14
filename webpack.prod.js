const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const uglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");
const copyWebpackPlugin = require("copy-webpack-plugin");
const swPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const webpackPwaManifest = require('webpack-pwa-manifest');
const PUBLIC_PATH = "https://thiagosalome.github.io/dragon-crypt/dist/"

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
    ]),
    new swPrecacheWebpackPlugin(
      {
        cacheId: PUBLIC_PATH,
        dontCacheBustUrlsMatching: /\.\w{8}\./,
        filename: 'service-worker.js',
        minify: true,
        navigateFallback: PUBLIC_PATH + 'index.html',
        staticFileGlobsIgnorePatterns: [/\.map$/, /manifest\.json$/]
      }
    ),
    new webpackPwaManifest({
      name: 'Dragon Crypt',
      short_name: 'Dragon Crypt',
      description: 'Applying password encryption from a phrase',
      background_color: '#F4516D',
      theme_color: '#F4516D',
      'theme-color': '#F4516D',
      start_url: 'https://thiagosalome.github.io/dragon-crypt/dist/',
      icons: [
        {
          src: path.resolve('src/assets/images/dragon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join('assets/images', 'icons')
        }
      ]
    })
  ],
  output: {
    filename : `assets/js/[name].min.js`,
    // path: path.resolve(__dirname, 'dist'),
    publicPath : PUBLIC_PATH
  }
});