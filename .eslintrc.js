module.exports = {
  extends: '@jameslnewell/eslint-config/react',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': [
      0,
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],

    // TODO: prettier should be looking after formatting
    indent: 'off',
    '@typescript-eslint/indent': 'off',
  },
  reportUnusedDisableDirectives: true,
};
