<div style="text-align: center;" align="center">

# @browsers/yarn-workspace-root

A simple utility to get the yarn workspace root

[![NPM version][npm-image]][npm-url]
[![Codacy Badge][codacy-image]][codacy-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]
[![License][license-image]][license-url]

[![Sonar][sonar-image]][sonar-url]

</div>

## Install

```bash
# use pnpm
$ pnpm install -D @browsers/yarn-workspace-root

# use yarn
$ yarn add -D @browsers/yarn-workspace-root

# use npm
$ npm install -D @browsers/yarn-workspace-root
```

## Usage

use import

```js
import { yarnWorkspaceRoot, yarnWorkspaceRootSync } from '@browsers/yarn-workspace-root'

yarnWorkspaceRoot()
// or
yarnWorkspaceRootSync()
```

use require

```js
const { yarnWorkspaceRoot, yarnWorkspaceRootSync } = require('@browsers/yarn-workspace-root')

yarnWorkspaceRoot()
// or
yarnWorkspaceRootSync()
```

## API reference

- Usage: `yarnWorkspaceRoot(cwd)` & `yarnWorkspaceRootSync(cwd)`
- Parameters:

<div class="table-prop">

| Param | Description  | Type     | Optional value | Required | Default value |
| ----- | ------------ | -------- | -------------- | -------- | ------------- |
| cwd   | running path | `string` | -              | `false`  | -             |

</div>

- Types:

```ts
declare type Manifest =
  | (Record<string, unknown> & {
      packages: any
      workspaces: any
    })
  | null

declare function yarnWorkspaceRoot(cwd?: string): Promise<string | null>

declare function yarnWorkspaceRootSync(cwd?: string): string | null
```

- Demos:

1. simple use

```ts
import { yarnWorkspaceRoot, yarnWorkspaceRootSync } from '@browsers/yarn-workspace-root'

yarnWorkspaceRoot().then(path => {
  console.log('The yarn workspace root is: ', path) // /Users/user/path/of/package/root or null
})
console.log('The yarn workspace root is: ', yarnWorkspaceRootSync()) // /Users/user/path/of/package/root or null
```

## Issues & Support

Please open an issue [here](https://github.com/saqqdy/browsers/issues).

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/@browsers/yarn-workspace-root.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@browsers/yarn-workspace-root
[codacy-image]: https://app.codacy.com/project/badge/Grade/f70d4880e4ad4f40aa970eb9ee9d0696
[codacy-url]: https://www.codacy.com/gh/saqqdy/@browsers/yarn-workspace-root/dashboard?utm_source=github.com&utm_medium=referral&utm_content=saqqdy/@browsers/yarn-workspace-root&utm_campaign=Badge_Grade
[codecov-image]: https://img.shields.io/codecov/c/github/saqqdy/@browsers/yarn-workspace-root.svg?style=flat-square
[codecov-url]: https://codecov.io/github/saqqdy/@browsers/yarn-workspace-root?branch=master
[download-image]: https://img.shields.io/npm/dm/@browsers/yarn-workspace-root.svg?style=flat-square
[download-url]: https://npmjs.org/package/@browsers/yarn-workspace-root
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[license-url]: LICENSE
[sonar-image]: https://sonarcloud.io/api/project_badges/quality_gate?project=saqqdy_browsers
[sonar-url]: https://sonarcloud.io/dashboard?id=saqqdy_browsers
