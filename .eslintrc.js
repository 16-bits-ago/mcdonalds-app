// eslint-disable-next-line no-undef
module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'react',
        '@typescript-eslint'
    ],
    settings: {
        react: {
            version: 'detect'
        }
    },
    rules: {
        indent: ['warn', 4],
        quotes: ['warn', 'single', { avoidEscape: true }],
        semi: ['error', 'always'],
        'quote-props': ['warn', 'as-needed'],
        curly: ['error', 'all'],
        'keyword-spacing': ['warn', { 
            before: true,
            after: true
        }],
        'object-curly-spacing': ['warn', 'always'],
        'arrow-spacing': 'warn',
        'key-spacing': ['warn', { afterColon: true }],
        'comma-spacing': ['warn', { before: false, after: true }],
    }
};