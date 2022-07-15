module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
  },
  env: {
    browser: true,
  },
  plugins: ["@typescript-eslint"],
  extends: ["plugin:import/typescript", "plugin:@typescript-eslint/recommended"],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/prefer-optional-chain": "warn",
    "@typescript-eslint/ban-types": ["error", { extendDefaults: true, types: { "{}": false } }],
    "import/no-unresolved": "off",
    "no-undef": "off",
  },
};
