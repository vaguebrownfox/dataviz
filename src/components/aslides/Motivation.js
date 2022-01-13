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

	const aText = (svg, txt, size = 32, xp, yp) => {
		return svg
			.append("text")
			.attr("text-anchor", "middle")
			.attr("font-size", size)
			.attr("x", `${xp}%`)
			.attr("y", `${yp}%`)
			.text(`${txt}`);
	};

	async function drawMotivation(svgRef) {
		const svg = d3.select(svgRef.current);
		svg.selectAll("*").remove();

		aText(svg, "It's painful", 32, 50, 10);
		aText(svg, "Get good", 24, 50, 50);
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
