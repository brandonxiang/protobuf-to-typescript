module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '\\.ts$': 'ts-jest'
  },
  testMatch: ['**/test/**/*.spec.ts']
};
