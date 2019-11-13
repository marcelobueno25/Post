module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    es6: true,
    node: true
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "standard"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "next" }],
    camelcase: "off",
    quotes: ["error", "double"],
    semi: ["error", "always"]
  }
};
