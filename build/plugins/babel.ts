import _babel, { type Options } from '@rollup/plugin-babel'
import type { Plugin } from 'rollup'
import { extensions } from '../config'

const babel = (options: Options = {}): Plugin =>
	_babel(
		Object.assign(
			{
				babelHelpers: 'bundled',
				extensions,
				exclude: [/node_modules[\\/]core-js/]
			},
			options
		)
	)

export default babel
