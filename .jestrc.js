module.exports = {
  preset: `ts-jest`,
  testMatch: [`**/*.test.ts?(x)`],
  moduleNameMapper: {
    '^@salad-ui/(.*)$': '<rootDir>/packages/$1/src',
  },
};
