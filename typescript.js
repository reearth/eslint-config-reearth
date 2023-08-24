module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
  },
  plugins: ["@typescript-eslint"],
  extends: ["plugin:@typescript-eslint/recommended", "plugin:import/typescript"],
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
    // TODO: Error: Error while loading rule '@typescript-eslint/prefer-optional-chain': You have used a rule which requires parserServices to be generated. You must therefore provide a value for the "parserOptions.project" property for @typescript-eslint/parser.
    // "@typescript-eslint/prefer-optional-chain": "warn",
    "@typescript-eslint/ban-types": ["error", { extendDefaults: true, types: { "{}": false } }],
    "import/no-unresolved": "off",
    "no-undef": "off",
  },
};
