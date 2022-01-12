import { Typography } from "@mui/material";
import React from "react";
import Basic from "../viz/Basic";
import classes from "../../styles/SlidePanel.module.css";

const Preface = () => {
	return (
		<div className={classes.root}>
			<Typography variant="h3" textAlign="center">
				Preface
			</Typography>
			<Basic />
		</div>
	);
};

export default Preface;
