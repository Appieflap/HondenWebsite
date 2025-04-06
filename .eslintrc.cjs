module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['react-refresh'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        'object-curly-spacing': ['error', 'always'],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
}
