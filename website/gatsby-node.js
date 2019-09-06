const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

exports.onCreateWebpackConfig = ({actions}) => {
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

exports.onCreateNode = ({node, actions}) => {
  const {createNodeField} = actions;

  if (node.internal.type === `Mdx`) {
    createNodeField({
      name: 'id',
      node,
      value: node.id,
    });

    createNodeField({
      name: 'title',
      node,
      value: node.frontmatter.title,
    });

    createNodeField({
      name: 'description',
      node,
      value: node.frontmatter.description,
    });

    createNodeField({
      name: 'slug',
      node,
      value: node.frontmatter.slug,
    });
  }
};
