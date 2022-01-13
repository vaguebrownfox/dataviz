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

	async function drawPreface(svgRef) {
		const height = svgRef.current.height.baseVal.value;
		const width = svgRef.current.width.baseVal.value;

		const margin = 48;
		const rVal = [0, 22];

		const svg = d3.select(svgRef.current);
		svg.selectAll("*").remove(); // clear svg panel

		const data = await d3.tsv("/data/tiar_data.tsv");

		let xtag = "sub_id";
		let ytag = "tiar";
		let rtag = "tiar";

		const xMinMax = d3.extent(data, (d) => parseFloat(d[xtag]));
		const yMinMax = d3.extent(data, (d) => parseFloat(d[ytag]));
		const rMinMax = d3.extent(data, (d) => parseFloat(d[rtag]));

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

		const xAxis = d3.axisBottom(xScale).tickValues(xMinMax);
		const xAxisG = svg
			.append("g")
			.attr("class", classes.axis)
			.attr("id", classes.xAxis)
			.attr("opacity", 0);
		xAxisG
			.call(xAxis)
			.attr("transform", `translate(${0}, ${height - margin})`);

		const yAxis = d3.axisLeft(yScale).tickValues(yMinMax);
		const yAxisG = svg
			.append("g")
			.attr("class", classes.axis)
			.attr("id", classes.yAxis)
			.attr("opacity", 0);

		yAxisG.call(yAxis).attr("transform", `translate(${margin}, ${0})`);

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
				Invariant and Component
			</Typography>
			<PanVizLayout
				{...{
					draw: drawPreface.bind({ slideCount }),
					slideCount,
					handleSlideNext,
					handleSlidePrev,
				}}
			/>
		</div>
	);
};

export default InvarComp;
