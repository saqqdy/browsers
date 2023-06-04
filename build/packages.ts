import type { PackageManifest } from './types'

export const packages: PackageManifest[] = [
	{
		name: 'mount-css',
		pkgName: 'mount-css',
		display: 'A simple function for mounting css'
	},
	{
		name: 'mount-script',
		pkgName: 'mount-script',
		display: 'A simple function for mounting javascript'
	},
	{
		name: 'mount-image',
		pkgName: 'mount-image',
		display: 'A simple function for mounting image'
	},
	{
		name: 'mount-style',
		pkgName: 'mount-style',
		display: 'A simple function for mounting css style codes'
	},
	{
		name: 'load-source',
		pkgName: 'load-source',
		display: 'A simple function for load js/image/css/style'
	},
	{
		name: 'monorepo',
		pkgName: '@browsers/monorepo',
		build: false,
		display: 'Some simple utilities for nodejs'
	}
]
