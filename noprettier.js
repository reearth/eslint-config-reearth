module.exports = {
  extends: ["./common", "./react"],
  overrides: [
    {
      files: ["*.ts", "*.mts", "*.tsx"],
      extends: ["./typescript"],
    },
    {
      files: ["*.cts"],
      extends: ["./typescript", "./commonjs"],
    },
    {
      files: ["*.cjs"],
      extends: ["./commonjs"],
    },
    {
      files: ["**/?(*.)+(spec|test).jsx?"],
      extends: ["./test-react"],
    },
    {
      files: ["**/?(*.)+(spec|test).tsx?"],
      extends: ["./typescript", "./test-react"],
    },
  ],
};
