module.exports = {
  preset: `ts-jest`,
  testMatch: [`**/*.test.ts?(x)`],
  moduleNameMapper: {
    '^@design-system-example/(.*)$': '<rootDir>/packages/$1/src',
  },
};
