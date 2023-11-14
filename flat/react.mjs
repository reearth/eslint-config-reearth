import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  {
    files: ["**/*.{jsx,tsx}"],
    plugins: { react, "react-hooks": reactHooks },
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
