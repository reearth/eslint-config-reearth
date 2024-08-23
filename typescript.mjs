import tseslint from "typescript-eslint";

export default tseslint.config(...tseslint.configs.strict, ...tseslint.configs.stylistic, {
  rules: {
    "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        args: "all",
        argsIgnorePattern: "^(_|e)",
        caughtErrors: "all",
        caughtErrorsIgnorePattern: "^(_|e)",
        destructuredArrayIgnorePattern: "^(_|e)",
        varsIgnorePattern: "^(_|e)",
        ignoreRestSiblings: true,
      },
    ],
  },
});
