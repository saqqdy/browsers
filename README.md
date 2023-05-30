<div style="text-align: center;" align="center">

# @browsers/monorepo

Some simple utilities for nodejs

[![NPM version][npm-image]][npm-url]
[![Codacy Badge][codacy-image]][codacy-url]
[![License][license-image]][license-url]

[![Sonar][sonar-image]][sonar-url]

</div>

## Function list

- find yarn workspace root: [@browsers/yarn-workspace-root](https://github.com/saqqdy/browsers/tree/master/packages/yarn-workspace-root)
- find workspace root: [mount-css](https://github.com/saqqdy/browsers/tree/master/packages/mount-css)

## Install

e.g: use `workspace-root`

```shell
# by pnpm
pnpm install workspace-root

# by npm
npm install -D workspace-root

# by yarn
yarn add workspace-root
```

## Usage

```js
import { workspaceRoot } from 'workspace-root'

workspaceRoot().then(path => {
  console.log('The workspace root is: ', path) // /Users/user/path/of/package/root or null
})
```

## Issues & Support

Please open an issue [here](https://github.com/saqqdy/browsers/issues).

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/@browsers/monorepo.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@browsers/monorepo
[codacy-image]: https://app.codacy.com/project/badge/Grade/f70d4880e4ad4f40aa970eb9ee9d0696
[codacy-url]: https://www.codacy.com/gh/saqqdy/@browsers/monorepo/dashboard?utm_source=github.com&utm_medium=referral&utm_content=saqqdy/@browsers/monorepo&utm_campaign=Badge_Grade
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[license-url]: LICENSE
[sonar-image]: https://sonarcloud.io/api/project_badges/quality_gate?project=saqqdy_browsers
[sonar-url]: https://sonarcloud.io/dashboard?id=saqqdy_browsers
