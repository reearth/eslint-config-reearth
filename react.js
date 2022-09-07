module.exports = {
  extends: ["plugin:react/recommended", "plugin:react/jsx-runtime"],
  env: {
    browser: true,
  },
  plugins: ["react", "react-hooks"],
  rules: {
    "react/prop-types": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-no-useless-fragment": "warn",
    "react/self-closing-comp": ["warn", {
      "component": true,
      "html": true
    }]
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
