'use strict';

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: { experimentalObjectRestSpread: true }
  },
  extends: [
    airbnb,
  ],
  rules: {
    'new-cap': 0
  }
}
