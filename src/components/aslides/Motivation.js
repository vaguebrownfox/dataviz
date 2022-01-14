import React from "react";
import * as d3 from "d3";
import { Typography } from "@mui/material";
import classes from "../../styles/SlidePanel.module.css";
import PanVizLayout from "../viz/PanVizLayout";

const Motivation = () => {
	const [slideCount, setSlideCount] = React.useState(0);

	const handleSlideNext = () => {
		setSlideCount((p) => p + 1);
	};

	const handleSlidePrev = () => {
		setSlideCount((p) => (p - 1 < 0 ? 0 : p - 1));
	};

	async function drawMotivation(svgRef) {
		const height = svgRef.current.height.baseVal.value;
		const width = svgRef.current.width.baseVal.value;

		const svg = d3.select(svgRef.current);
		svg.selectAll("*").remove();

		const margin = { top: 60, right: 0, bottom: 0, left: 0 };

		const data = d3.csvParseRows(
			await fetch("/data/pulsar.csv").then((r) => r.text()),
			d3.autoType
		);

		const overlap = 12;
		const xScale = d3
			.scaleLinear()
			.domain([0, data[0].length - 1])
			.range([margin.left, width - margin.right]);

		const yScale = d3
			.scalePoint()
			.domain(data.map((d, i) => i))
			.range([margin.top, height - margin.bottom]);

		const z = d3
			.scaleLinear()
			.domain([
				d3.min(data, (d) => d3.min(d)),
				d3.max(data, (d) => d3.max(d)),
			])
			.range([0, -overlap * yScale.step()]);

		const area = d3
			.area()
			.defined((d) => !isNaN(d))
			.x((d, i) => xScale(i))
			.y0(0)
			.y1(z);

		const line = area.lineY1();

		const serie = svg
			.append("g")
			.selectAll("g")
			.data(data)
			.join("g")
			.attr("transform", (d, i) => `translate(0,${yScale(i) + 1})`);

		serie
			.append("path")
			.attr("fill", "none")
			.attr("stroke", "black")
			.attr("d", line);

		serie.append("path").attr("fill", "#fff").attr("d", area);

		// const xAxis = (g) =>
		// 	g
		// 		.attr("transform", `translate(0,${height - margin.bottom})`)
		// 		.call(
		// 			d3
		// 				.axisBottom(xScale.copy().domain([0, 92]))
		// 				.ticks(width / 80)
		// 		)
		// 		.call((g) => g.select(".domain").remove())
		// 		.call((g) =>
		// 			g
		// 				.select(".tick:first-of-type text")
		// 				.append("tspan")
		// 				.attr("x", 10)
		// 				.text(" ms")
		// 		);

		// svg.append("g").call(xAxis);
	}

	return (
		<div className={classes.root}>
			<Typography variant="h3" textAlign="center">
				Motivation
			</Typography>
			<PanVizLayout
				{...{
					draw: drawMotivation.bind({ slideCount }),
					slideCount,
					handleSlideNext,
					handleSlidePrev,
				}}
			/>
		</div>
	);
};

export default Motivation;
