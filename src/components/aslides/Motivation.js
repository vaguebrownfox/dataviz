import { Typography } from "@mui/material";
import React from "react";
import Basic from "../viz/Basic";
import classes from "../../styles/SlidePanel.module.css";

const Motivation = () => {
	return (
		<div className={classes.root}>
			<Typography variant="h3" textAlign="center">
				Motivation
			</Typography>
			<Basic />
		</div>
	);
};

export default Motivation;
