module.exports = {
  preset: 'ts-jest',
  globals: {
    __DEV__: true,
    __BROWSER__: false,
    __JSDOM__: false,
    __FEATURE_OPTIONS__: true,
    __FEATURE_SUSPENSE__: true,
  },
  // coverageDirectory: 'coverage',
  // coverageReporters: ['html', 'lcov', 'text'],
  // collectCoverageFrom: ['packages/*/src/**/*.ts'],
  // watchPathIgnorePatterns: ['/node_modules/'],
  // moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  rootDir: __dirname,
  testMatch: ['<rootDir>/packages/**/__tests__/**/*spec.[jt]s?(x)'],
};
