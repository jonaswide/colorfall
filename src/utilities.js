export const getTints = ({ colorFrom, colorTo, shadesCount }) => {
	const from = hexToRgb(colorFrom)
	const to = hexToRgb(colorTo)
	const counter = shadesCount + 1

	const stepCalc = [(to.r - from.r) / counter, (to.g - from.g) / counter, (to.b - from.b) / counter]

	let palette = []
	palette[0] = rgbToHex(from.r, from.g, from.b)
	palette[counter] = rgbToHex(to.r, to.g, to.b)

	for (let i = 1; i < counter; i++) {
		const r = from.r + stepCalc[0] * i
		const g = from.g + stepCalc[1] * i
		const b = from.b + stepCalc[2] * i

		palette[i] = rgbToHex(r, g, b)
	}

	return palette
}

const hexToRgb = hex => {
	const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
	const fullHex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b)

	const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex)
	return rgb ? { r: parseInt(rgb[1], 16), g: parseInt(rgb[2], 16), b: parseInt(rgb[3], 16) } : null
}

const rgbToHex = (r, g, b) => {
	const newR = Math.round(r) << 16
	const newG = Math.round(g) << 8
	const newB = Math.round(b)

	return "#" + ((1 << 24) + newR + newG + newB).toString(16).slice(1)
}
