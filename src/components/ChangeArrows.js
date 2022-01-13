import React from "react";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { IconButton } from "@mui/material";
import theme from "../styles/theme";
import Link from "./Link";
import classes from "../styles/Slides.module.css";

export const ChangeArrows = ({ progs }) => {
	return (
		<div className={classes.changeArrows}>
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
