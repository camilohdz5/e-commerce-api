module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': ['off', { extensions: ['.js', '.jsx'] }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-var-requires': 'off',
    'global-require': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': ['error', { ignore: ['src'] }],
    'no-param-reassign': 'off',
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    'prefer-default-export': false,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts',],
      },
    },
  },
};