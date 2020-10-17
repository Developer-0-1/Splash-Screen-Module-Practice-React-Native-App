module.exports = {
  root: true,
  // extends: '@react-native-community',
  plugins: ['react-native'],
  extends: [
    'eslint:recommended',
    'plugin:react-native/all',
    'plugin:react/recommended',
  ],
  parser: 'babel-eslint',
  env: {
    'react-native/react-native': true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': false,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 2,
  },
};
