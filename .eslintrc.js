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
        "arrow-body-style":0,
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/button-has-type': 0,
        "space-infix-ops":0,
        "jsx-quotes": ["error", "prefer-single"],
        "no-undef": 0,
        "no-unused-vars": 0,
        "no-debugger": 0,
        "object-curly-spacing": 0,
        "object-curly-newline": 0,
        "no-self-compare": 0,
        "no-constant-condition": 0,
        "react/jsx-one-expression-per-line": 0,
        "new-cap": 0,
        "react/jsx-wrap-multilines":0,
        "padded-blocks": 0,
        "react/jsx-indent-props":0,
        "no-console": 0,
        "no-const-assign": 0,
        "react/no-array-index-key": 0,
        "consistent-return": 0,
        "array-callback-return": 0,
        "react/jsx-max-props-per-line": 0,
        "react/jsx-first-prop-new-line": 0,
        "react/jsx-closing-bracket-location": 0,
        "arrow-parens": 0,
        "jsx-a11y/no-noninteractive-element-interactions": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        // "react/jsx-equals-spacing":[2, "always"],
        "react/jsx-curly-spacing":[0, "always"],
        "default-case": 0,
        "comma-dangle":0,
        "react/destructuring-assignment": 0,
        "no-shadow": 0,
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