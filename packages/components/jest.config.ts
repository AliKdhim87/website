import path from 'path';

import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest/presets/js-with-ts-esm', // Changed to ESM preset
  extensionsToTreatAsEsm: ['.ts', '.tsx'], // Added to support ESM
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '^.+\\.svg': path.join('<rootDir>', 'src', 'tests', 'mocks', 'svgMock.tsx'),
  },
  setupFilesAfterEnv: [path.join('<rootDir>', 'src', 'tests', 'setupTests.ts')],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePaths: [path.join('<rootDir>')],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.test.json',
        useESM: true, // Added to enable ESM support
      },
    ],
  },
  transformIgnorePatterns: [
    // Added to handle node_modules
    'node_modules/(?!(.*\\.mjs$))',
  ],
  testPathIgnorePatterns: [
    // Added to ignore rollup cache
    '/node_modules/',
    '/.rollup.cache/',
  ],
};

export default config;
