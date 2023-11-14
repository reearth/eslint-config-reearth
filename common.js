module.exports = {
  env: {
    es6: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["import"],
  rules: {
    "import/first": "warn",
    "import/newline-after-import": "warn",
    "import/no-duplicates": ["warn", { considerQueryString: true }],
    "import/order": [
      "warn",
      {
        pathGroups: [
          {
            pattern: "@/**",
            group: "external",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
};
