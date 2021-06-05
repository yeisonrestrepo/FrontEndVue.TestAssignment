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
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  }
};
