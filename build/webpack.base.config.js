const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 8888,
    open: true,
    compress: true,
    hot: true,
    contentBase: [path.resolve(__dirname, 'dist')],
    historyApiFallback: {
      //browserHash 刷新重定向到index.html
      index: './index.html',
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@': resolve('src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: true,
            },
          },
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1000000,
          name: assetsPath('img/[name].[hash:7].[ext]'),
        },
      },
      {
        test: /\.css$/,
        use: [
          // 这里报错，还没有解决
          // {
          //   loader: MiniCssExtractPlugin.loader,
          //   options: {
          //     esModule: true,
          //   },
          // },
          {
            loader: 'css-loader',
            options: {
              modules: {
                compileType: 'module',
                mode: 'local',
                auto: true,
                exportGlobals: true,
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                localIdentContext: path.resolve(__dirname, 'src'),
                localIdentHashPrefix: 'my-custom-hash',
                namedExport: true,
                exportLocalsConvention: 'camelCase',
                exportOnlyLocals: false,
              },
            },
          },
        ],
        include: [resolve('src')],
      },
    ],
  },
  plugins: [
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
      inject: true,
      minify: {
        minifyJS: true,
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
