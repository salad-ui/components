const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = ({config}) => {
  // resolve @salad-ui/<package> to source
  config.resolve.plugins = [new TsconfigPathsPlugin()];

  // run type checking on a different thread so compilation finishes (and efficiently)
  config.plugins.push(new ForkTsCheckerWebpackPlugin());

  return config;
};
