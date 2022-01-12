import { Typography } from "@mui/material";
import React from "react";
import Signal from "../viz/Signal";
import classes from "../../styles/SlidePanel.module.css";

const Intro = () => {
	return (
		<div className={classes.root}>
			<Typography variant="h3" textAlign="center">
				Intro
			</Typography>
			<Signal />
		</div>
	);
};

export default Intro;
