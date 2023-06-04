import type { PackageManifest } from './types'

export const packages: PackageManifest[] = [
	{
		name: 'mount-css',
		pkgName: 'mount-css',
		iifeName: 'mountCss',
		display: 'A simple function for mounting css'
	},
	{
		name: 'mount-script',
		pkgName: 'mount-script',
		iifeName: 'mountScript',
		display: 'A simple function for mounting javascript'
	},
	{
		name: 'mount-image',
		pkgName: 'mount-image',
		iifeName: 'mountImage',
		display: 'A simple function for mounting image'
	},
	{
		name: 'mount-style',
		pkgName: 'mount-style',
		iifeName: 'mountStyle',
		display: 'A simple function for mounting css style codes'
	},
	{
		name: 'load-source',
		pkgName: 'load-source',
		iifeName: 'loadSource',
		external: ['mount-css', 'mount-script', 'mount-image', 'mount-style'],
		display: 'A simple function for load js/image/css/style'
	},
	{
		name: 'monorepo',
		pkgName: '@browsers/monorepo',
		build: false,
		display: 'Some simple utilities for nodejs'
	}
]
