module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "no-unused-vars": "error",
    "max-len": ["error", {code: 120}], 
    "object-curly-spacing": ["error", "never"], 
    "require-jsdoc": "off", 
    "eol-last": ["error", "always"],
    "operator-linebreak": ["error", "after"], 
    "comma-dangle": ["error", "always-multiline"], 
  },
};
