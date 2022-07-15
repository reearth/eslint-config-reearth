module.exports = {
  extends: ["./common"],
  overrides: [
    {
      files: ["*.js", "*.cjs"],
      extends: ["./node-commonjs"],
    },
    {
      files: ["*.mjs"],
      extends: ["./node"],
    },
    {
      files: ["*.ts"],
      extends: ["./typescript"],
    },
    {
      files: ["*.tsx"],
      extends: ["./typescript", "./react"],
    },
    {
      files: ["**/?(*.)+(spec|test).js"],
      extends: ["./test"],
    },
    {
      files: ["**/?(*.)+(spec|test).jsx"],
      extends: ["./test-react"],
    },
    {
      files: ["**/?(*.)+(spec|test).ts"],
      extends: ["./typescript", "./test"],
    },
    {
      files: ["**/?(*.)+(spec|test).tsx"],
      extends: ["./typescript", "./react", "./test-react"],
    },
  ],
};
