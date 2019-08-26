const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  onCreateWebpackConfig: ({actions, getConfig}) => {
    // make gatsby use source files for component packages for live updates
    actions.setWebpackConfig({
      resolve: {
        plugins: [new TsconfigPathsPlugin({configFile: '../tsconfig.json'})],
      },
    });

    // make gatsby embed metadata for react components
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            include: /\/packages\/[^\/]+\/src\//,
            use: ['react-docgen-typescript-loader'],
          },
        ],
      },
    });
  },
};
