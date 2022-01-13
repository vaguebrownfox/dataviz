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

		console.log(svgRef.current.width.baseVal.value);

		svg.append("text")
			.attr("text-anchor", "middle")
			.attr("x", "50%")
			.attr("y", "50%")
			.text("motivation" + this.slideCount);
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
