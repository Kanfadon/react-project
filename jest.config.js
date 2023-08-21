module.exports = {
    "testEnvironment": "jsdom",
    transform: {
        '\\.tsx?$': 'ts-jest',
        '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub'
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js',
        'jsx',
        'json'
    ],
    setupFilesAfterEnv: ['@testing-library/jest-dom', './src/__tests__/setupTests.ts'],
    verbose: true,
    bail: 0
};