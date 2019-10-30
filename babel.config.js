module.exports = api => {
  api.cache.forever();
  // const isTest = api.env('test');
  return {
    presets: [
      ['@babel/preset-env', {targets: {node: 'current'}}],
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
  };
};
