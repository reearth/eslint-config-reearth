import { fixupPluginRules } from "@eslint/compat";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

/** @type { import("eslint").Linter.Config[] } */
export default [
  {
    files: ["**/*.{jsx,tsx,ts,js}"],
    plugins: {
      react,
      "react-hooks": fixupPluginRules(reactHooks),
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/prop-types": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",
      "react/jsx-no-useless-fragment": [
        "warn",
        {
          allowExpressions: true,
        },
      ],
      "react/self-closing-comp": [
        "warn",
        {
          component: true,
          html: true,
        },
      ],
    },
  },
];
