module.exports = {
  extends: ["plugin:node/recommended"],
  env: {
    node: true,
  },
  plugins: ["node"],
  rules: {
    "node/no-missing-import": "off",
    "node/no-missing-require": "off",
    "node/no-unpublished-import": "off",
    "node/no-unpublished-require": "off",
    "node/no-unsupported-features/es-syntax": ["error", { ignores: ["modules"] }],
  },
};
