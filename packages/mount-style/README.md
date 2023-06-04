<div style="text-align: center;" align="center">

# mount-style

A simple function for mounting css style codes

[![NPM version][npm-image]][npm-url]
[![Codacy Badge][codacy-image]][codacy-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]
[![gzip][gzip-image]][gzip-url]
[![License][license-image]][license-url]

[![Sonar][sonar-image]][sonar-url]

</div>

<div style="text-align: center; margin-bottom: 20px;" align="center">

</div>

## Installing

```bash
# use pnpm
$ pnpm install mount-style

# use npm
$ npm install mount-style --save

# use yarn
$ yarn add mount-style
```

## Usage

### General use

```js
import mountStyle from 'mount-style'

mountStyle('css style codes', options)
```

2. by require

```js
const mountStyle = require('mount-style')

mountStyle('css style codes', options)
```

### Use CDN resource

```html
<!-- head -->
<script src="https://unpkg.com/mount-style@1.2.0/dist/index.global.prod.js"></script>
```

## Support & Issues

Please open an issue [here](https://github.com/saqqdy/browsers/issues).

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/mount-style.svg?style=flat-square
[npm-url]: https://npmjs.org/package/mount-style
[codacy-image]: https://app.codacy.com/project/badge/Grade/f70d4880e4ad4f40aa970eb9ee9d0696
[codacy-url]: https://www.codacy.com/gh/saqqdy/mount-style/dashboard?utm_source=github.com&utm_medium=referral&utm_content=saqqdy/mount-style&utm_campaign=Badge_Grade
[codecov-image]: https://img.shields.io/codecov/c/github/saqqdy/mount-style.svg?style=flat-square
[codecov-url]: https://codecov.io/github/saqqdy/mount-style?branch=master
[download-image]: https://img.shields.io/npm/dm/mount-style.svg?style=flat-square
[download-url]: https://npmjs.org/package/mount-style
[gzip-image]: http://img.badgesize.io/https://unpkg.com/mount-style/dist/index.global.prod.js?compression=gzip&label=gzip%20size:%20JS
[gzip-url]: http://img.badgesize.io/https://unpkg.com/mount-style/dist/index.global.prod.js?compression=gzip&label=gzip%20size:%20JS
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[license-url]: LICENSE
[sonar-image]: https://sonarcloud.io/api/project_badges/quality_gate?project=saqqdy_browsers
[sonar-url]: https://sonarcloud.io/dashboard?id=saqqdy_browsers
