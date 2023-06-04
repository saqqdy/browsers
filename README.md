<div style="text-align: center;" align="center">

# @browsers/monorepo

Some simple utilities for browsers

[![NPM version][npm-image]][npm-url]
[![Codacy Badge][codacy-image]][codacy-url]
[![License][license-image]][license-url]

[![Sonar][sonar-image]][sonar-url]

</div>

## Function list

- A simple function for load js/image/css/style: [load-source](https://github.com/saqqdy/browsers/tree/master/packages/load-source)
- A simple function for mounting css: [mount-css](https://github.com/saqqdy/browsers/tree/master/packages/mount-css)
- A simple function for mounting javascript: [mount-script](https://github.com/saqqdy/browsers/tree/master/packages/mount-script)
- A simple function for mounting image: [mount-image](https://github.com/saqqdy/browsers/tree/master/packages/mount-image)
- A simple function for mounting css style codes: [mount-style](https://github.com/saqqdy/browsers/tree/master/packages/mount-style)

## Install

e.g: use `load-source`

```shell
# by pnpm
pnpm install load-source

# by npm
npm install -D load-source

# by yarn
yarn add load-source
```

## Usage

### General use

```js
import loadSource from 'load-source'

loadSource('js/image/css/style', options)
```

2. by require

```js
const loadSource = require('load-source')

loadSource('js/image/css/style', options)
```

### Use CDN resource

```html
<!-- head -->
<script src="https://unpkg.com/load-source@1.2.0/dist/index.global.prod.js"></script>
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
