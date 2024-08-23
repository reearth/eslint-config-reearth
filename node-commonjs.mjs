import commonjs from "./commonjs.mjs";
import node from "./node.mjs";

/** @type { import("eslint").Linter.Config[] } */
export default [
  ...commonjs,
  ...node,
  {
    rules: {
      "node/no-missing-import": "error",
      "node/no-missing-require": "error",
      "node/no-unsupported-features/es-syntax": ["error", { ignores: [] }],
    },
  },
];
