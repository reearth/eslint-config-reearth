module.exports = {
  env: {
    node: true,
  },
  extends: ["plugin:node/recommended"],
  plugins: ["node"],
  rules: {
    "node/no-unpublished-require": "off",
    "node/no-unpublished-import": "off",
    "node/no-unsupported-features/es-syntax": ["error", { ignores: ["modules"] }],
  },
};
