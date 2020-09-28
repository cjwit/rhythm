const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      }
    ]
  },
  mode: 'development',
  entry: './scripts/script.js',
  output: {
    filename: './main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  watch: true,
};