import js from "@eslint/js";
import globals from "globals";

/** @type { import("eslint").Linter.Config[] } */
export default [
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.es2021,
      },
    },
  },
  js.configs.recommended,
];
