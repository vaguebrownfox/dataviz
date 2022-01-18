import React from "react";
import * as d3 from "d3";
import { Typography } from "@mui/material";
import classes from "../../styles/SlidePanel.module.css";
import PanVizLayout from "../viz/PanVizLayout";

const DrawScatter = () => {
	const [slideCount, setSlideCount] = React.useState(0);

	const margin = 42;
	const rval = [0, 20];

	const handleSlideNext = () => {
		setSlideCount((p) => p + 1);
	};

	const handleSlidePrev = () => {
		setSlideCount((p) => (p - 1 < 0 ? 0 : p - 1));
	};

	// To Draw
	async function draw(svgRef) {
		// Draw here

		// Size
		const height = svgRef.current.height.baseVal.value;
		const width = svgRef.current.width.baseVal.value;

		//Get svg
		const svg = d3.select(svgRef.current);
		svg.selectAll("*").remove();

		// Load the data
		const data = await d3.tsv("/data/tiar_data.tsv");

		// Min max
		const xMinMax = d3.extent(data, (d) => parseFloat(d.fa1));
		const yMinMax = d3.extent(data, (d) => parseFloat(d.fa2));
		const rMinMax = d3.extent(data, (d) => parseFloat(d.tiar));

		// Scale
		const xScale = d3
			.scaleLinear()
			.domain(xMinMax)
			.range([margin + rval[1], width - margin - rval[1]]);
		const yScale = d3
			.scaleLinear()
			.domain(yMinMax)
			.range([margin + rval[1], height - margin - rval[1]]);
		const rScale = d3.scaleLinear().domain(rMinMax).range(rval);
		const cScale = d3.interpolateCool;

		// Draw circles
		const circles = svg
			.selectAll(classes.dot)
			.data(data)
			.enter()
			.append("circle")
			.attr("cx", (d) => xScale(parseFloat(d.fa1)))
			.attr("cy", (d) => yScale(parseFloat(d.fa2)))
			.attr("r", 0)
			.attr("fill", (d) => cScale(parseFloat(d.tiar) / rMinMax[1]))
			.attr("opacity", 0.5);

		const xAxis = d3.axisBottom(xScale).tickValues(xMinMax);
		const xAxisG = svg.append("g").attr("class", classes.axis);
		xAxisG
			.call(xAxis)
			.attr("transform", `translate(${0}, ${height - margin})`);

		const yAxis = d3.axisLeft(yScale).tickValues(yMinMax);
		const yAxisG = svg.append("g").attr("class", classes.axis);
		yAxisG.call(yAxis).attr("transform", `translate(${margin}, ${0})`);

		// Animation
		circles
			.transition()
			.delay((_, i) => i * 10)
			.attr("r", (d) => rScale(parseFloat(d.tiar)));
	}

	return (
		<div className={classes.root}>
			<Typography variant="h3" textAlign="center">
				D3: Simple scatterplot
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

export default DrawScatter;
