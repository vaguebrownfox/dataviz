import React from "react";
import * as d3 from "d3";
import { Typography } from "@mui/material";
import classes from "../../styles/SlidePanel.module.css";
import PanVizLayout from "../viz/PanVizLayout";

const Priorities = () => {
	const [slideCount, setSlideCount] = React.useState(0);

	const handleSlideNext = () => {
		setSlideCount((p) => p + 1);
	};

	const handleSlidePrev = () => {
		setSlideCount((p) => (p - 1 < 0 ? 0 : p - 1));
	};

	async function draw(svgRef) {
		const svg = d3.select(svgRef.current);
		svg.selectAll("*").remove();

		if (this.slideCount < 4) {
			svg.append("text")
				.attr("text-anchor", "middle")
				.attr("x", "50%")
				.attr("y", "20%")
				.text(`To "see" a graphic, one has three questions`);

			this.slideCount > 0 &&
				svg
					.append("text")
					.attr("text-anchor", "middle")
					.attr("x", "50%")
					.attr("y", "30%")
					.text("What are X and Y components?");

			this.slideCount > 1 &&
				svg
					.append("text")
					.attr("text-anchor", "middle")
					.attr("x", "50%")
					.attr("y", "40%")
					.text("What are groups in X and Y constructed by Z?");

			this.slideCount > 2 &&
				svg
					.append("text")
					.attr("text-anchor", "middle")
					.attr("x", "50%")
					.attr("y", "50%")
					.text("What are the exceptions to these groups?");
		}

		this.slideCount > 4 &&
			svg
				.append("text")
				.attr("text-anchor", "middle")
				.attr("x", "50%")
				.attr("y", "20%")
				.text("The image of X Y Z");

		this.slideCount > 5 &&
			svg
				.append("text")
				.attr("text-anchor", "middle")
				.attr("x", "50%")
				.attr("y", "50%")
				.text("The image of X Y Z");
	}

	return (
		<div className={classes.root}>
			<Typography variant="h3" textAlign="center">
				Priorities
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

export default Priorities;
