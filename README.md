<div style="text-align: center;" align="center">

# @browsers/monorepo

Some simple utilities for browsers

[![NPM version][npm-image]][npm-url]
[![Codacy Badge][codacy-image]][codacy-url]
[![License][license-image]][license-url]

[![Sonar][sonar-image]][sonar-url]

</div>

## Function list

- A simple function for mounting css: [mount-css](https://github.com/saqqdy/browsers/tree/master/packages/mount-css)
- find workspace root: [mount-css](https://github.com/saqqdy/browsers/tree/master/packages/mount-css)

## Install

e.g: use `mount-css`

```shell
# by pnpm
pnpm install mount-css

# by npm
npm install -D mount-css

# by yarn
yarn add mount-css
```

## Usage

### General use

```js
import mountCss from 'mount-css'

mountCss('css url', options)
```

2. by require

```js
const mountCss = require('mount-css')

mountCss('css url', options)
```

### Use CDN resource

```html
<!-- head -->
<script src="https://unpkg.com/mount-css@1.2.0/dist/index.global.prod.js"></script>
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
