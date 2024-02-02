module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'next',
    'next/core-web-vitals',
    'prettier',
  ],
  rules: {
    eqeqeq: 'off',
    strict: 'off',
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    'default-param-last': 'off',
    'no-nested-ternary': 'off',
    'no-unused-expressions': 'off',
    'no-use-before-define': 'off',
    camelscase: 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/order': 'off',
    '@next/next/no-page-custom-font': 'off',
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ],
  },
};
