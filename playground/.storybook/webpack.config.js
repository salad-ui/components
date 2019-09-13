const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const tsconfigPath = '../tsconfig.json';

module.exports = ({config}) => {
  // add support for typescript
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('ts-loader'),
        options: {
          transpileOnly: true,
        },
      },
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  });
  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.plugins = [
    new TsconfigPathsPlugin({configFile: tsconfigPath}),
  ];
  config.plugins.push(new ForkTsCheckerWebpackPlugin({tsconfig: tsconfigPath}));

  // add support for SASS
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
  });

  return config;
};
