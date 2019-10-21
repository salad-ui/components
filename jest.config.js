module.exports = {
  testMatch: [`**/*.tests.ts?(x)`],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@salad-ui/(.*)$': '<rootDir>/packages/$1/src',
  },
  transformIgnorePatterns: [
    // ignore node_modules because we expect them to already be transpiled, except for: lodash-es
    '<rootDir>/node_modules/(?!lodash-es)',
  ],
};
