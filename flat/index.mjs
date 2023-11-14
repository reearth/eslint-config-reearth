import common from "./common.mjs";
import imp from "./import.mjs";
import react from "./react.mjs";
import testReact from "./test-react.mjs";
import test from "./test.mjs";
import typescript from "./typescript.mjs";

export { default as browser } from "./browser.mjs";
export { default as common } from "./common.mjs";
export { default as commonjs } from "./commonjs.mjs";
export { default as import } from "./import.mjs";
export { default as node } from "./node.mjs";
export { default as nodeCommonjs } from "./node-commonjs.mjs";
export { default as prettier } from "./prettier.mjs";
export { default as react } from "./react.mjs";
export { default as test } from "./test.mjs";
export { default as testReact } from "./test-react.mjs";
export { default as typescript } from "./typescript.mjs";

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [...common, ...imp, ...react, ...typescript, ...test, ...testReact];
