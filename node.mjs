import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";

const flatCompat = new FlatCompat();

/** @type { import("eslint").Linter.Config[] } */
export default [
  ...fixupConfigRules(flatCompat.extends("plugin:node/recommended")),
  {
    rules: {
      "node/no-missing-import": "off",
      "node/no-missing-require": "off",
      "node/no-unpublished-import": "off",
      "node/no-unpublished-require": "off",
      "node/no-unsupported-features/es-syntax": "off",
      "node/no-extraneous-import": "off",
    },
  },
];
