import globals from "globals";

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  {
    files: ["**/*.{js,cjs,cts}"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.commonjs,
      },
    },
  },
];
