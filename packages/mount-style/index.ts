export type StyleAttributes = Pick<HTMLStyleElement, 'disabled' | 'media' | 'type'>

export interface StyleOptions {
	attrs?: StyleAttributes
	props?: StyleAttributes
}

/**
 * Dynamic loading of css styles
 *
 * @param src - css string
 * @param option - parameters: attrs, props
 * @returns - results
 */
function mountStyle(css: string, option: StyleOptions = {}): Promise<boolean> {
	if (!css) throw new Error('[mountStyle]: css string is required')
	const { attrs, props } = option
	return new Promise(resolve => {
		const dom = document.createElement('style')
		let attr: keyof StyleAttributes, prop: keyof StyleAttributes
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
		dom.type = 'text/css'
		try {
			dom.appendChild(document.createTextNode(css))
		} catch (ex) {
			dom.textContent = css
		}
		document.getElementsByTagName('head')[0].appendChild(dom)
		resolve(true)
	})
}

export default mountStyle
