import React from "react";
import { Svg } from "../Svg";
import * as d3 from "d3";

// Styles
import classes from "../../styles/SvgDraw.module.css";
import { Paper } from "@mui/material";

const Basic = () => {
	function drawBasic(svgRef) {
		const svg = d3.select(svgRef.current);
		svg.append("rect")
			.attr("x", 0)
			.attr("y", 0)
			.attr("width", 100)
			.attr("height", 100);
	}
	return (
		<div className={classes.svgDrawStatic}>
			<Paper elevation={3} className={classes.svgBox}>
				<Svg
					className={classes.svg}
					style={{ opacity: 1 }}
					draw={drawBasic}
				/>
			</Paper>
		</div>
	);
};

export default Basic;
