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
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/button-has-type': 0,
    'import/no-extraneous-dependencies': 0,
    'react/jsx-indent': 0,
    'max-len': ["error", { "code": 110 }],
    'react/jsx-indent-props': [2, 4],
    indent: [2, 4, {'SwitchCase': 1, 'VariableDeclarator': 1}],
    quotes: [2, 'single', { avoidEscape: true }],
    semi: [2, 'never'],
  },
}
