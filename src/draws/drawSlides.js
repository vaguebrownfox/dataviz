async function drawPreface(svgRef) {
	const height = svgRef.current.height.baseVal.value;
	const width = svgRef.current.width.baseVal.value;

	const svg = d3.select(svgRef.current);
	svg.selectAll("*").remove();

	console.log(svgRef.current.width.baseVal.value);

	svg.append("text")
		.attr("text-anchor", "middle")
		.attr("x", "50%")
		.attr("y", "50%")
		.text("preface" + this.slideCount);
}

async function drawMotivation(svgRef) {
	const height = svgRef.current.height.baseVal.value;
	const width = svgRef.current.width.baseVal.value;

	const svg = d3.select(svgRef.current);
	svg.selectAll("*").remove();

	console.log(svgRef.current.width.baseVal.value);

	svg.append("text")
		.attr("text-anchor", "middle")
		.attr("x", "50%")
		.attr("y", "50%")
		.text("preface" + this.slideCount);
}

module.exports = { drawPreface, drawMotivation };
