import common from "./common.mjs";
import ignores from "./ignore.mjs";
import imp from "./imp.mjs";
import react, { recommended as reactRecommended } from "./react.mjs";
import testReact from "./test-react.mjs";
import test from "./test.mjs";
import typescript from "./typescript.mjs";

export { default as browser } from "./browser.mjs";
export { default as common } from "./common.mjs";
export { default as commonjs } from "./commonjs.mjs";
export { default as imp } from "./imp.mjs";
export { default as react, recommended as reactRecommended } from "./react.mjs";
export { default as test } from "./test.mjs";
export { default as testReact } from "./test-react.mjs";
export { default as typescript } from "./typescript.mjs";
export { default as ignores } from "./ignore.mjs";

export default (projectName, opts) => [
  ...common,
  ...imp(projectName),
  ...(opts?.reactRecommended ? reactRecommended : react),
  ...typescript,
  ...test,
  ...testReact,
  ...ignores,
];
