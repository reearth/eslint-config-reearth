# eslint-config-reearth

An extensible shared ESLint config for Re:Earth projects (ESlint v9+)

## How to install

```
npm install --save-dev eslint prettier eslint-config-reearth
yarn add --dev eslint prettier eslint-config-reearth
pnpm add -D eslint prettier eslint-config-reearth
```

Then edit your ESLint config file:

### ESLint config (`eslint.config.mjs`)

```js
import config from "eslint-config-reearth";

/** @type { import("eslint").Linter.Config[] } */
export default [...config("projectName", { reactRecommended: true })];
```

- Only config that uses `.mjs` is supported.
- Legacy config (`.eslintrc`) is no longer supported.

## package.json scripts (example)

```json
{
  "scripts": {
    "lint": "eslint .",
    "fix": "eslint --fix .",
    "format": "prettier --write ."
  }
  "prettier": "eslint-config-reearth/.prettierrc.json"
}
```

## VSCode settings

See [settings.json](.vscode/settings.json) and [extensions.json](.vscode/extensions.json).

## Config

- [reearth](./index.mjs)
- [reearth/common](./common.mjs)
- [reearth/commonjs](./commonjs.mjs)
- [reearth/typescript](./typescript.mjs)
- [reearth/noprettier](./noprettier.mjs)
- [reearth/react](./react.mjs)
- [reearth/test](./test.mjs)
- [reearth/test-react](./test-react.mjs)

NOTE: Using Prettier via ESLint is no longer supported. Use [prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).
