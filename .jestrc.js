module.exports = {
  preset: `ts-jest`,
  testMatch: [`**/*.test.ts?(x)`],
  moduleNameMapper: {
    '^@carrot-components/(.*)$': '<rootDir>/packages/$1/src',
  },
};
