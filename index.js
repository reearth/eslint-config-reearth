module.exports = {
  extends: [require.resolve("./common")],
  overrides: [
    {
      files: ["*.js", "*.cjs"],
      extends: [require.resolve("./node-commonjs")],
    },
    {
      files: ["*.mjs"],
      extends: [require.resolve("./node")],
    },
    {
      files: ["*.ts"],
      extends: [require.resolve("./typescript")],
    },
    {
      files: ["*.tsx"],
      extends: [require.resolve("./typescript"), require.resolve("./react")],
    },
    {
      files: ["**/?(*.)+(spec|test).js"],
      extends: [require.resolve("./test")],
    },
    {
      files: ["**/?(*.)+(spec|test).jsx"],
      extends: [require.resolve("./test-react")],
    },
    {
      files: ["**/?(*.)+(spec|test).ts"],
      extends: [require.resolve("./typescript"), require.resolve("./test")],
    },
    {
      files: ["**/?(*.)+(spec|test).tsx"],
      extends: [
        require.resolve("./typescript"),
        require.resolve("./react"),
        require.resolve("./test-react"),
      ],
    },
  ],
};
