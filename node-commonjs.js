module.exports = {
  extends: ["./node", "./commonjs"],
  rules: {
    "node/no-unsupported-features/es-syntax": ["error", { ignores: [] }],
  },
};
