import type { Config } from '@jest/types';
import path from 'path';

// Sync object
const config: Config.InitialOptions = {
  testEnvironment: 'jsdom',
  verbose: false,
  transform: {
    '\\.[jt]sx?$': ['babel-jest', {
      configFile: path.resolve(__dirname, '.babelrc'),
    }],
  }
};

export default config;
