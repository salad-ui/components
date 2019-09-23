const TreatPlugin = require('treat/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isInDevelopment = ({configType}) => configType === 'DEVELOPMENT';

exports.babel = (config, options) => {
  if (isInDevelopment(options)) {
    return {
      ...config,
      plugins: [...config.plugins, `babel-plugin-treat`],
    };
  }
  return config;
};

exports.webpack = (config, options) => {
  if (isInDevelopment(options)) {
    return {
      ...config,
      plugins: [...config.plugins, new TreatPlugin()],
    };
  } else {
    return {
      ...config,
      plugins: [
        ...config.plugins,
        new TreatPlugin({
          outputLoaders: [MiniCssExtractPlugin.loader],
        }),
        new MiniCssExtractPlugin(),
      ],
    };
  }
};
