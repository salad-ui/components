const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const tsconfigPath = './tsconfig.json';

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [new TsconfigPathsPlugin({configFile: tsconfigPath})],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              cacheDirectory: true,
              presets: ['@babel/preset-env'],
              plugins: ['babel-plugin-styled-components'],
            },
          },
          {
            loader: require.resolve('ts-loader'),
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({tsconfig: tsconfigPath}),
    new HtmlWebpackPlugin({template: './src/index.html'}),
  ],
  // @see https://github.com/TypeStrong/ts-loader#transpileonly-boolean-defaultfalse
  stats: {
    warningsFilter: /export .* was not found in/,
  },
  devServer: {
    port: 8200,
    historyApiFallback: true,
  },
};
