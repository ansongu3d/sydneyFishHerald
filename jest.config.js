module.exports = {
  testPathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/dist'], // might want?
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'], // this is the KEY
  testEnvironment: 'jsdom',
};
