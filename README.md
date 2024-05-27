# eslint-config-reearth

An extensible shared ESLint config for Re:Earth projects

## How to install

```
npm install eslint prettier eslint-config-reearth --save-dev
```

Then edit your ESLint config file:

### Flat config (`eslint.config.mjs`)

```js
import config from "eslint-config-reearth/flat/index.mjs";

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [...config];
```

See [`flat`](flat) dir. Currently only config that uses `.mjs` is supported. Prettier is no longer enabled by default, but is opt-in.

### Legacy (`.eslintrc.js`)

```js
module.exports = {
  extends: ["reearth"],
};
```

## Config

- [reearth](./index.js)
- [reearth/common](./common.js)
- [reearth/commonjs](./commonjs.js)
- [reearth/typescript](./typescript.js)
- [reearth/node](./node.js)
- [reearth/node-commonjs](./node-commonjs.js)
- [reearth/noprettier](./noprettier.js)
- [reearth/prettier](./prettier.js)
- [reearth/react](./react.js)
- [reearth/test](./test.js)
- [reearth/test-react](./test-react.js)
