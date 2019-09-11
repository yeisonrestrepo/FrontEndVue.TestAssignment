const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'src/'),
  entry: {
    'styles': './styles.scss'
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js', // enable multiple js output files
    // publicPath: ASSET_PATH,
    // path: path.resolve(__dirname, 'public/assets')
  },
  plugins: [
    // Make sure the compiled styles are output as separate files
    new ExtractTextPlugin({
      filename: '[name].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/,
        use: ExtractTextPlugin.extract({
          // fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                // If you are having trouble with urls not resolving add this setting.
                // See https://github.com/webpack-contrib/css-loader#url
                // url: false,
                // minimize: true,
                // sourceMap: false
              }
            }
          ]
        })
      },
      // {
      //   test: /\.(sass|scss|css)$/,
      //   use: [
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         // If you are having trouble with urls not resolving add this setting.
      //         // See https://github.com/webpack-contrib/css-loader#url
      //         // url: false,
      //         // minimize: true,
      //         // sourceMap: false
      //       }
      //     }
      //   ]
      // }
    ]
  }
};
