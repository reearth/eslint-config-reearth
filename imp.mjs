import { fixupPluginRules } from "@eslint/compat";
import eslintImport from "eslint-plugin-import";

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  {
    plugins: {
      import: fixupPluginRules(eslintImport),
    },
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
  },
];
