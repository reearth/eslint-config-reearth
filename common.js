module.exports = {
  env: {
    es6: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["import", "prettier"],
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
    "prettier/prettier": ["warn", require("./.prettierrc.json")],
  },
};
