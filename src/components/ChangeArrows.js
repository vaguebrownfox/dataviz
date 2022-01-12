import React from "react";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { IconButton } from "@mui/material";
import theme from "../styles/theme";
import Link from "./Link";

const classes = {
	changeArrows: {
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 32,
		display: "flex",
		flexGrow: 1,
		justifyContent: "space-between",
		alignItems: "center",
		color: "black",
	},
};

export const ChangeArrows = ({ progs }) => {
	return (
		<div style={classes.changeArrows}>
			<Link href={progs.prev} style={{ textDecoration: "none" }}>
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
			</Link>
			<Link href={progs.next} style={{ textDecoration: "none" }}>
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
			</Link>
		</div>
	);
};
