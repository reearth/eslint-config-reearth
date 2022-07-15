module.exports = {
  extends: [require.resolve("./node"), require.resolve("./commonjs")],
  rules: {
    "node/no-missing-import": "error",
    "node/no-missing-require": "error",
    "node/no-unsupported-features/es-syntax": ["error", { ignores: [] }],
  },
};
