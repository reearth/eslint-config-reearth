import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  ...compat.extends("plugin:node/recommended"),
  {
    rules: {
      "node/no-missing-import": "off",
      "node/no-missing-require": "off",
      "node/no-unpublished-import": "off",
      "node/no-unpublished-require": "off",
      "node/no-unsupported-features/es-syntax": ["error", { ignores: ["modules"] }],
    },
  },
];
