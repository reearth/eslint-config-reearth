import tseslint from "typescript-eslint";

export default tseslint.config(...tseslint.configs.strict, ...tseslint.configs.stylistic, {
  rules: {
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
  },
});
