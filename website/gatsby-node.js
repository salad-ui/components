const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

exports.onCreateWebpackConfig = ({actions}) => {
  // make gatsby use source files for component packages for live updates
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });

  // make gatsby embed metadata for react components
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          include: /\/packages\/[^\/]+\/src\//,
          use: [
            {
              loader: 'react-docgen-typescript-loader',
              options: {
                shouldExtractLiteralValuesFromEnum: true,
              },
            },
          ],
        },
      ],
    },
  });
};

exports.onCreateNode = ({node, getNode, actions}) => {
  const {createNodeField} = actions;
  if (node.internal.type === 'SitePage') {
    createNodeField({
      node,
      name: `uri`,
      value: node.path,
    });
    createNodeField({
      node,
      name: `category`,
      value: node.path.split('/')[1],
    });
  }
};
