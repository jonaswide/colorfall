import { getTints } from "./utilities"

export default {
	state: {
		colorFrom: "#B8F2FC",
		colorTo: "#57C4F9",
		shadesCount: 3,
		waterfall: ["#B8F2FC", "#a0e7fb", "#88dbfb", "#6fd0fa", "#57c4f9"],
	},

	handleColorFromInput(val) {
		this.state.colorFrom = val
	},
	handleColorToInput(val) {
		this.state.colorTo = val
	},
	handleShadeCountChange(num) {
		this.state.shadesCount = Number(num)
	},
	generateWaterfall() {
		while (this.state.waterfall.length > 0) this.state.waterfall.pop()
		const newWaterfall = getTints(this.state)
		newWaterfall.forEach(el => this.state.waterfall.push(el))
	},
}
