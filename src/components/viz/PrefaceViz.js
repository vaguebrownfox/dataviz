import React, { useState } from "react";
import * as d3 from "d3";

// Styles
import classes from "../../styles/SvgDraw.module.css";
import { IconButton, Paper } from "@mui/material";
import { SvgStatic } from "../SvgStatic";
import { Svg } from "../Svg";
import { ArrowLeft, ArrowRight, Refresh } from "@mui/icons-material";
import { Box } from "@mui/system";

const PrefaceViz = ({ slideCount, handleSlideNext, handleSlidePrev }) => {
	const [refresh, setRefresh] = useState(false);

	const handleToggle = () => {
		setRefresh((p) => !p);
	};

	async function draw(svgRef) {
		const height = svgRef.current.height.baseVal.value;
		const width = svgRef.current.width.baseVal.value;

		const svg = d3.select(svgRef.current);
		svg.selectAll("*").remove();

		console.log(svgRef.current.width.baseVal.value);

		svg.append("text")
			.attr("text-anchor", "middle")
			.attr("x", "50%")
			.attr("y", "50%")
			.text("lolololololololololol");
	}

	return (
		<div className={classes.svgDrawStatic}>
			<Paper elevation={3} className={classes.svgBox}>
				<SvgStatic
					className={classes.svg}
					style={{ opacity: 1 }}
					draw={draw}
					refresh={slideCount}
				/>
			</Paper>
			<Box>
				<IconButton
					className={classes.svgRefreshIcon}
					onClick={handleSlidePrev}
				>
					<ArrowLeft />
				</IconButton>
				<IconButton
					className={classes.svgRefreshIcon}
					onClick={handleSlideNext}
				>
					<ArrowRight />
				</IconButton>
			</Box>
		</div>
	);
};

export default PrefaceViz;
