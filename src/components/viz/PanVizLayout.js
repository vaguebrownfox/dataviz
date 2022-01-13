import React, { useState } from "react";
import * as d3 from "d3";

// Styles
import classes from "../../styles/SvgDraw.module.css";
import { IconButton, Paper } from "@mui/material";
import { SvgStatic } from "../SvgStatic";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Box } from "@mui/system";

const PanVizLayout = ({
	draw,
	slideCount,
	handleSlideNext,
	handleSlidePrev,
}) => {
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

export default PanVizLayout;
