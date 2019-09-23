const TreatPlugin = require('treat/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isInDevelopment = stage =>
  stage === 'develop' || stage === 'develop-html';

exports.onCreateBabelConfig = ({stage, actions}) => {
  if (isInDevelopment(stage)) {
    actions.setBabelPlugin({
      name: `babel-plugin-treat`,
    });
  }
};

exports.onCreateWebpackConfig = ({stage, actions}) => {
  if (isInDevelopment(stage)) {
    actions.setWebpackConfig({
      plugins: [new TreatPlugin()],
    });
  } else {
    actions.setWebpackConfig({
      plugins: [
        new TreatPlugin({
          outputLoaders: [MiniCssExtractPlugin.loader],
        }),
        new MiniCssExtractPlugin(),
      ],
    });
  }
};
