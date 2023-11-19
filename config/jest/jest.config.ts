import path from 'path';

export default {
    rootDir: '../../',
    modulePaths: [
        '<rootDir>src',
    ],
    moduleDirectories: [
        'node_modules',
    ],
    moduleNameMapper: {
        '\\.s?css$': 'identity-obj-proxy',
        '\\.svg$': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    },
    clearMocks: true,
    globals: {
        __IS_DEV__: true,
    },
    testEnvironment: 'jsdom',
    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\',
    ],
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],
    testMatch: [
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
    ],
    setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
};
