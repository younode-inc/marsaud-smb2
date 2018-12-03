module.exports = {
  extends: ['standard', 'prettier'],
  globals: {
    Promise: true,
  },
  parserOptions: {
    ecmaVersion: 5,
  },
  rules: {
    // detect incorrect import/require
    'node/no-extraneous-import': 'error',
    'node/no-extraneous-require': 'error',
    'node/no-missing-require': 'error',
    'node/no-missing-import': 'error',
  },
};
