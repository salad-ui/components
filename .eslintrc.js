module.exports = {
  extends: '@jameslnewell/eslint-config/react',
  parserOptions: {
    // project: './tsconfig.lint.json',
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
    '@typescript-eslint/no-empty-interface': 1,
  },
  reportUnusedDisableDirectives: true,
};
