import type { PackageManifest } from './types'

export const packages: PackageManifest[] = [
	{
		name: 'monorepo',
		pkgName: '@browsers/monorepo',
		build: false,
		display: 'Some simple utilities for nodejs'
	},
	{
		name: 'mount-css',
		pkgName: 'mount-css',
		// iife: false,
		display: 'mount-css'
	}
]
