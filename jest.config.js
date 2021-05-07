module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '.git', '/dist/'],
  moduleNameMapper: {
    'src(.*)$': '<rootDir>/src/$1',
  },
  automock: false,
};
