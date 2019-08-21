const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  onCreateWebpackConfig: ({actions}) => {
    actions.setWebpackConfig({
      resolve: {
        plugins: [new TsconfigPathsPlugin({configFile: '../tsconfig.json'})],
      },
    });
  },
};
