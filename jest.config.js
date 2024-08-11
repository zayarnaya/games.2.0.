/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: 'ts-jest',
  testEnvironment: "jsdom",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
    '^.+\\.(html)$': 'babel-jest',
  },
};
