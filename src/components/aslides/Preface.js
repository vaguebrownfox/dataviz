import React from "react";
import * as d3 from "d3";
import { Typography } from "@mui/material";
import classes from "../../styles/SlidePanel.module.css";
import PanVizLayout from "../viz/PanVizLayout";

const Preface = () => {
	const [slideCount, setSlideCount] = React.useState(0);

	const handleSlideNext = () => {
		setSlideCount((p) => p + 1);
	};

	const handleSlidePrev = () => {
		setSlideCount((p) => (p - 1 < 0 ? 0 : p - 1));
	};

	async function drawPreface(svgRef) {
		const svg = d3.select(svgRef.current);
		svg.selectAll("*").remove();

		svg.append("text")
			.attr("text-anchor", "middle")
			.attr("x", "50%")
			.attr("y", "50%")
			.text("preface" + this.slideCount);
	}

	return (
		<div className={classes.root}>
			<Typography variant="h3" textAlign="center">
				Preface
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

export default Preface;
