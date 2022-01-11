import React from "react";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { IconButton } from "@mui/material";
import theme from "../styles/theme";

const classes = {
	changeArrows: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		display: "flex",
		flexGrow: 1,
		justifyContent: "space-between",
		alignItems: "center",
		color: "black",
	},
};

export const ChangeArrows = ({ sid }) => {
	return (
		<div style={classes.changeArrows}>
			<IconButton
				sx={{
					margin: theme.spacing(2),
					color: theme.palette.primary.main,
				}}
				aria-label="previous"
				size="large"
			>
				<ArrowBackIosNewIcon />
			</IconButton>
			<IconButton
				sx={{
					margin: theme.spacing(2),
					color: theme.palette.primary.main,
				}}
				aria-label="next"
				size="large"
			>
				<ArrowForwardIosIcon />
			</IconButton>
		</div>
	);
};
