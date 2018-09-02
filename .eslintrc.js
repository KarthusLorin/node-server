module.exports = {
  "extend": ["eslint: recommended"],
  "rules": {
    "no-console": ["error", {
      "allow": ["warn", "error", "info"]
    }]
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "script"
  },
  "globals": {
    "ecmaVersion": 6,
    "sourceType": "script"
  },
  "env": {
    "node": true,
    "es6": true,
    "mocha": true
  }
}