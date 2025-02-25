import vitest from "@vitest/eslint-plugin";
import testingLibrary from "eslint-plugin-testing-library";

/** @type { import("eslint").Linter.Config[] } */
export default [
  {
    files: ["**/*.test.{js,ts,cjs,mjs,jsx,tsx}"],
    plugins: {
      "testing-library": testingLibrary,
      vitest,
    },
    rules: {
      ...vitest.configs.recommended.rules,
      "vitest/expect-expect": "off",
      "vitest/valid-title": "off",
    },
  },
];
