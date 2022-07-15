module.exports = {
  extends: [require.resolve("./node")],
  plugins: ["testing-library"],
  rules: {
    "no-restricted-globals": [
      "error",
      {
        name: "expect",
        message: 'Use `import { "expect" } from "vitest";` instead.',
      },
      {
        name: "describe",
        message: 'Use `import { "describe" } from "vitest";` instead.',
      },
      {
        name: "it",
        message: 'Use `import { "it" } from "vitest";` instead.',
      },
      {
        name: "test",
        message: 'Use `import { "test" } from "vitest";` instead.',
      },
    ],
  },
};
