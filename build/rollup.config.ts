import { dirname, join, resolve, sep } from 'path'
import { existsSync } from 'fs'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'url'
import type { InternalModuleFormat, OutputOptions, Plugin, RollupOptions } from 'rollup'
import { packages } from './packages'
import {
	babel,
	commonjs,
	// esbuild,
	filesize,
	nodeResolve,
	replace,
	terser,
	typescript,
	visual
} from './plugins'

export interface Config {
	input: string
	file: string
	format: InternalModuleFormat
	browser?: boolean
	minify?: boolean
	transpile?: boolean
	iifeName?: string
	banner?: string
	env: 'development' | 'production'
	plugins?: Plugin[]
}

export interface Output extends OutputOptions {
	plugins: Plugin[]
}

export interface Options extends RollupOptions {
	external: string[]
	plugins: Plugin[]
	output: Output
}

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const require = createRequire(import.meta.url)

const configs: Config[] = []

for (const {
	globals = {},
	name,
	iifeName,
	external = [],
	iife,
	build,
	cjs,
	mjs,
	browser,
	target
} of packages) {
	if (build === false) continue
	const dirName = name.replace(/\./g, sep)
	const PROJECT_ROOT = resolve(__dirname, '..', 'packages', dirName)
	const pkg = require(join(PROJECT_ROOT, 'package.json'))
	const HAS_INDEX_MJS = existsSync(join(PROJECT_ROOT, 'index.mjs'))
	const HAS_INDEX_DEFAULT = existsSync(join(PROJECT_ROOT, 'index.default.ts'))
	const banner =
		'/*!\n' +
		' * ' +
		pkg.name +
		' v' +
		pkg.version +
		'\n' +
		' * ' +
		pkg.description +
		'\n' +
		' * (c) 2021-' +
		new Date().getFullYear() +
		' saqqdy<https://github.com/saqqdy> \n' +
		' * Released under the MIT License.\n' +
		' */'

	configs.push({
		input: join(PROJECT_ROOT, 'index.ts'),
		file: join(PROJECT_ROOT, 'dist', 'index.esm-bundler.js'),
		format: 'es',
		env: 'development'
	})

	// output browser
	if (browser !== false) {
		configs.push(
			{
				input: join(PROJECT_ROOT, 'index.ts'),
				file: join(PROJECT_ROOT, 'dist', 'index.esm-browser.js'),
				format: 'es',
				browser: true,
				env: 'development'
			},
			{
				input: join(PROJECT_ROOT, 'index.ts'),
				file: join(PROJECT_ROOT, 'dist', 'index.esm-browser.prod.js'),
				format: 'es',
				browser: true,
				minify: true,
				env: 'production'
			}
		)
	}

	// output mjs
	if (mjs !== false && !HAS_INDEX_MJS) {
		configs.push({
			input: join(PROJECT_ROOT, 'index.ts'),
			file: join(PROJECT_ROOT, 'dist', 'index.mjs'),
			format: 'es',
			env: 'development'
		})
	}

	// output cjs
	if (cjs !== false) {
		configs.push({
			input: join(PROJECT_ROOT, HAS_INDEX_DEFAULT ? 'index.default.ts' : 'index.ts'),
			file: join(PROJECT_ROOT, 'dist', 'index.cjs.js'),
			format: 'cjs',
			env: 'development'
		})
	}

	// output iife
	if (iife !== false) {
		configs.push(
			{
				input: join(PROJECT_ROOT, HAS_INDEX_DEFAULT ? 'index.default.ts' : 'index.ts'),
				file: join(PROJECT_ROOT, 'dist', 'index.global.js'),
				format: 'iife',
				iifeName,
				banner,
				env: 'development'
			},
			{
				input: join(PROJECT_ROOT, HAS_INDEX_DEFAULT ? 'index.default.ts' : 'index.ts'),
				file: join(PROJECT_ROOT, 'dist', 'index.global.prod.js'),
				format: 'iife',
				minify: true,
				iifeName,
				banner,
				env: 'production'
			}
		)
	}

	// const input = `packages/${dirName}/index.ts`
	// const output: OutputOptions[] = []
	// // output mjs
	// if (mjs !== false) {
	// 	output.push({
	// 		file: `packages/${dirName}/dist/${fn.replace(/\.ts$/, '.mjs')}`,
	// 		exports: 'auto',
	// 		format: 'es'
	// 	})
	// }
	// // output cjs
	// if (cjs !== false) {
	// 	output.push({
	// 		file: `packages/${dirName}/dist/${fn.replace(/\.ts$/, '.cjs.js')}`,
	// 		exports: 'auto',
	// 		format: 'cjs'
	// 	})
	// }
	// // output iife
	// if (iife !== false && fn === 'index.ts') {
	// 	output.push(
	// 		{
	// 			file: `packages/${dirName}/dist/${fn}.global.js`,
	// 			format: 'iife',
	// 			name: iifeName,
	// 			extend: true,
	// 			globals: iifeGlobals,
	// 			banner,
	// 			plugins: [
	// 				// injectNodeKitCore,
	// 			]
	// 		},
	// 		{
	// 			file: `packages/${dirName}/dist/${fn}.global.prod.js`,
	// 			format: 'iife',
	// 			name: iifeName,
	// 			extend: true,
	// 			globals: iifeGlobals,
	// 			plugins: [
	// 				// injectNodeKitCore,
	// 				minify({
	// 					minify: true
	// 				}),
	// 				bannerPlugin({
	// 					content: banner
	// 				})
	// 			]
	// 		}
	// 	)
	// }
	// // browser
	// if (browser !== false && fn === 'index.ts') {
	// 	output.push(
	// 		{
	// 			file: `packages/${dirName}/dist/${fn}.global.js`,
	// 			format: 'es',
	// 			banner,
	// 			plugins: [
	// 				// injectNodeKitCore,
	// 			]
	// 		},
	// 		{
	// 			file: `packages/${dirName}/dist/${fn}.global.prod.js`,
	// 			format: 'es',
	// 			plugins: [
	// 				// injectNodeKitCore,
	// 				minify({
	// 					minify: true
	// 				}),
	// 				bannerPlugin({
	// 					content: banner
	// 				})
	// 			]
	// 		}
	// 	)
	// }

	// // create library options
	// options.push({
	// 	input,
	// 	output,
	// 	plugins: [nodeResolve, target ? esbuild({ target }) : esbuild(), filesize],
	// 	external: [...externals, ...external]
	// })
}

function createEntries() {
	return configs.map(createEntry)
}

function createEntry(config: Config) {
	const isGlobalBuild = config.format === 'iife'
	const isTypeScript = config.input.endsWith('.ts')
	const banner = config.banner

	const _config: Options = {
		external: [],
		input: config.input,
		plugins: [],
		output: {
			file: config.file,
			format: config.format,
			exports: 'auto',
			extend: true,
			plugins: [],
			globals: {}
		},
		onwarn: (msg: any, warn) => {
			if (!/Circular/.test(msg)) {
				warn(msg)
			}
		}
	}

	if (isGlobalBuild || config.browser) _config.output.banner = banner

	if (isGlobalBuild) {
		_config.output.name = _config.output.name || 'jsCool'
	}

	if (!isGlobalBuild) {
		_config.external.push(
			'core-js',
			'mount-css',
			'mount-script',
			'mount-image',
			'mount-style',
			'load-source',
			'use-downloads'
		)
	}

	_config.plugins.push(replace(), nodeResolve(), commonjs)

	if (config.transpile !== false) {
		_config.plugins.push(babel())
		isTypeScript &&
			_config.plugins.push(
				// config.target ? esbuild({ target: config.target }) : esbuild()
				typescript()
			)
	}

	if (config.minify) {
		_config.plugins.push(terser({ module: config.format === 'es' }))
	}

	_config.plugins.push(filesize, visual)

	return _config
}

export default createEntries()
