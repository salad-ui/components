module.exports = {
  preset: `ts-jest`,
  testMatch: [`**/*.tests.ts?(x)`],
  moduleNameMapper: {
    '^@salad-ui/(.*)$': '<rootDir>/packages/$1/src',
  },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    // ignore node_modules because we expect them to already be transpiled, except for: lodash-es
    '<rootDir>/node_modules/(?!lodash-es)',
  ],
};
