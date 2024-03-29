const path = require('path');
const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

const webpack = require('webpack');
const dotenv = require('dotenv').config({ path: `${__dirname}/.env` });

module.exports = {
  mode: 'production',
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          query: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.GOOGLE_MAPS_API_KEY': JSON.stringify(dotenv.parsed.GOOGLE_MAPS_API_KEY),
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", "*"],
  },
};
