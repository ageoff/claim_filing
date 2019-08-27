module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  settings: {
    ecmascript: 6,
    jsx: true,
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb'],
  plugins: ['react'],
  rules: {
    semi: ['error', 'never'],
    'react/jsx-filename-extension': 0,
  },
};
