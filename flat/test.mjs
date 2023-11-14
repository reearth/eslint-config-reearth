import testingLibary from "eslint-plugin-testing-library";

import node from "./node.mjs";

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  ...node,
  {
    files: ["**/*.test.{js,ts,cjs,mjs,jsx,tsx}"],
    plugins: {
      ...node.plugins,
      "testing-library": testingLibary,
    },
  },
];
