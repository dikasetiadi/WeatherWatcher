module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['airbnb'],
  settings: {
    "import/resolver": {
      "babel-module": {}
    }
  },
  rules: {
    "import/prefer-default-export": "off",
    "no-use-before-define": "off",
    "import/no-extraneous-dependencies": "off"
  }
};
