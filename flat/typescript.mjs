import typescriptEslint from "@typescript-eslint/eslint-plugin";
import typescriptEslintParser from "@typescript-eslint/parser";

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  {
    files: ["**/*.{ts,mts,cts,tsx}"],
    languageOptions: {
      parser: typescriptEslintParser,
    },
    plugins: {
      "@typescript-eslint": typescriptEslint,
    },
    rules: {
      ...typescriptEslint.configs.recommended.rules,
      ...typescriptEslint.configs["recommended-type-checked"].rules,
      ...typescriptEslint.configs.strict.rules,
      ...typescriptEslint.configs["strict-type-checked"].rules,
      ...typescriptEslint.configs.stylistic.rules,
    },
  },
];
