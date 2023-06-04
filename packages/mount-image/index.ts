export type ImageAttributes = Pick<
	HTMLImageElement,
	| 'align'
	| 'alt'
	| 'border'
	| 'crossOrigin'
	| 'decoding'
	| 'height'
	| 'hspace'
	| 'isMap'
	| 'loading'
	| 'longDesc'
	| 'lowsrc'
	| 'name'
	| 'referrerPolicy'
	| 'sizes'
	| 'src'
	| 'srcset'
	| 'useMap'
	| 'vspace'
	| 'width'
>

export interface HTMLImageElementEX extends HTMLImageElement {
	onreadystatechange?: any
	readyState?: 'loaded' | 'complete'
}

export interface ImgOptions {
	attrs?: ImageAttributes
	props?: ImageAttributes
	force?: boolean
}

/**
 * Dynamic loading of image resources
 *
 * @param src - resource address
 * @param option - parameters: attrs, props, force
 * @returns - result
 */
function mountImage(src: string, option: ImgOptions = {}): Promise<boolean | string> {
	if (!src) throw new Error('[mountImage]: url is required')
	const { attrs, props, force = false } = option
	return new Promise((resolve, reject) => {
		if (!force && document.querySelector(`img[src="${src}"]`)) {
			resolve(true)
			return
		}
		const dom: HTMLImageElementEX = document.createElement('img')
		let attr: keyof ImageAttributes, prop: keyof ImageAttributes
		if (attrs) {
			for (attr in attrs) {
				dom[attr] = attrs[attr] as never
			}
		}
		if (props) {
			for (prop in props) {
				dom[prop] = props[prop] as never
			}
		}
		dom.src = src
		document.body.appendChild(dom)
		dom.onload = dom.onreadystatechange = function () {
			if (!dom.readyState || ['loaded', 'complete'].includes(dom.readyState)) {
				dom.onload = dom.onreadystatechange = null
				resolve(true)
			}
		}
		dom.onerror = reject
	})
}

export default mountImage
