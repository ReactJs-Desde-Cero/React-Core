module.exports = {
    env: {
        browser: true,
        es2020: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        "arrow-body-style":["error", "as-needed"],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/button-has-type': 0,
        "react/jsx-equals-spacing":[2, "always"],
        "react/jsx-curly-spacing":[2, "always"],
        "no-confusing-arrow": [0, {"allowParens": false}],
        "import/prefer-default-export": "off",
        'import/no-extraneous-dependencies': 0,
        "react/jsx-props-no-spreading":[0],
        "react/prop-types":[0],
        'react/jsx-indent': ['error', 4],
        quotes: [2, 'single', { avoidEscape: true }],
        semi: [2, 'never'],
    },
}