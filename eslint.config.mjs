import config from "./index.mjs";

export default [
  ...config(),
  {
    files: ["**/*.mjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
];
