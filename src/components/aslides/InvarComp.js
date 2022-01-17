import React from "react";
import * as d3 from "d3";
import { Typography } from "@mui/material";
import classes from "../../styles/SlidePanel.module.css";
import PanVizLayout from "../viz/PanVizLayout";

const InvarComp = () => {
	const [slideCount, setSlideCount] = React.useState(0);

	const handleSlideNext = () => {
		setSlideCount((p) => p + 1);
	};

	const handleSlidePrev = () => {
		setSlideCount((p) => (p - 1 < 0 ? 0 : p - 1));
	};

	async function draw(svgRef) {
		// Size of SVG panel
		const height = svgRef.current.height.baseVal.value;
		const width = svgRef.current.width.baseVal.value;

		// Plot padding
		const margin = 48;
		const rVal = [0, 22];

		// Get SVG
		const svg = d3.select(svgRef.current);
		svg.selectAll("*").remove(); // clear svg panel

		// Load data (public/data)
		const data = await d3.tsv("/data/tiar_data.tsv");

		// CSV header labels for plotting
		let xtag = "fa1";
		let ytag = "fe1";
		let rtag = "tiar";

		// X and Y labels
		let xLabel = "F1 (Hz)";
		let yLabel = "F2 (Hz)";

		// Min and Max values of components
		const xMinMax = d3.extent(data, (d) => parseFloat(d[xtag]));
		const yMinMax = d3.extent(data, (d) => parseFloat(d[ytag]));
		const rMinMax = d3.extent(data, (d) => parseFloat(d[rtag]));

		// Scales for components
		const xScale = d3
			.scaleLinear()
			.domain(xMinMax)
			.range([margin + rVal[1], width - margin - rVal[1]]);
		const yScale = d3
			.scaleLinear()
			.domain(yMinMax.reverse())
			.range([margin + rVal[1], height - margin - rVal[1]]);
		const rScale = d3.scaleLinear().domain(rMinMax).range(rVal);
		const cScale = d3.interpolateMagma;

		// Draw circles
		const circles = svg
			.selectAll(classes.dot)
			.data(data)
			.enter()
			.append("circle")
			.attr("cx", (d) => {
				return xScale(parseFloat(d[xtag]));
			})
			.attr("cy", (d) => {
				return yScale(parseFloat(d[ytag]));
			})
			.attr("r", 0)
			.attr("fill", (d) => cScale(d[rtag] / rMinMax[1]))
			.attr("stroke", "#000")
			.attr("stroke-width", 0)
			.style("opacity", (d) => d[rtag] / rMinMax[1]);

		// Interactivity
		// TODO

		// Add Axis Groups
		const xAxis = d3.axisBottom(xScale).tickValues(xMinMax);
		const xAxisG = svg
			.append("g")
			.attr("class", classes.axis)
			.attr("id", classes.xAxis)
			.attr("opacity", 0);
		xAxisG
			.call(xAxis)
			.attr("transform", `translate(${0}, ${height - margin})`);

		// X label
		xAxisG
			.append("text")
			.text(`${xtag} | ${xLabel}`)
			.attr("text-anchor", "middle")
			.attr("fill", "#000")
			.attr("x", width / 2)
			.attr("y", margin / 2);

		const yAxis = d3.axisLeft(yScale).tickValues(yMinMax);
		const yAxisG = svg
			.append("g")
			.attr("class", classes.axis)
			.attr("id", classes.yAxis)
			.attr("opacity", 0);
		yAxisG.call(yAxis).attr("transform", `translate(${margin}, ${0})`);
		// Y label
		yAxisG
			.append("text")
			.text(`${ytag} | ${yLabel}`)
			.attr("text-anchor", "middle")
			.attr("fill", "#000")
			.attr("x", -margin / 2)
			.attr("y", height / 2)
			.attr("transform", `rotate(-90,${-margin / 2}, ${height / 2} )`);

		// Animation
		circles
			.transition()
			.delay((_, i) => i * 10)
			.attr("r", (d) => {
				return rScale(parseFloat(d[rtag]));
			});

		xAxisG.transition().duration(2000).attr("opacity", 1);
		yAxisG.transition().duration(2000).attr("opacity", 1);
	}

	return (
		<div className={classes.root}>
			<Typography variant="h3" textAlign="center">
				D3 scatterplot
			</Typography>
			<PanVizLayout
				{...{
					draw: draw.bind({ slideCount }),
					slideCount,
					handleSlideNext,
					handleSlidePrev,
				}}
			/>
		</div>
	);
};

export default InvarComp;
