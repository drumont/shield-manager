module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        'eslint:recommended',
        '@vue/typescript/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-multi-spaces': 'error',
        '@typescript-eslint/no-var-requires': 0,
        "no-loss-of-precision": "off",
        "@typescript-eslint/no-loss-of-precision": ["error"]
    },
};
