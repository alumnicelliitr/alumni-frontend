// @flow

import path from 'path'
import webpack from 'webpack'

import { STATIC_PATH } from './src/shared/config'

import UglifyJSPlugin from 'uglifyjs-webpack-plugin'


export default {
  entry: {
    hot: 'react-hot-loader/patch',
    client: './src/client',
    crowdFunding: './src/crowdFunding',
  },
  output: {
    filename: 'js/bundle_[name].js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].[chunkhash].bundle.js',
    publicPath: STATIC_PATH,
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
      {
        test: /(\.global\.css$|react-select.css)/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /^((?!\.global|react-select).)*\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              name: '[hash].[ext]',
              bypassOnDebug: true,
              optipng: {
                enabled: true,
              },
              mozjpeg: {
                progressive: true,
                quality: 65
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "node_modules",
      minChunks: Infinity,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new UglifyJSPlugin({
      cache: true,
      uglifyOptions: {
        compress: {
          arrows: false,
          booleans: false,
          collapse_vars: false,
          comparisons: false,
          computed_props: false,
          hoist_funs: false,
          hoist_props: false,
          hoist_vars: false,
          if_return: false,
          inline: false,
          join_vars: false,
          keep_infinity: true,
          loops: false,
          negate_iife: false,
          properties: false,
          reduce_funcs: false,
          reduce_vars: false,
          sequences: false,
          side_effects: false,
          switches: false,
          top_retain: false,
          toplevel: false,
          typeofs: false,
          unused: false,
          conditionals: true,
          dead_code: true,
          evaluate: true,
        },
        mangle: true,
      },
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
}
