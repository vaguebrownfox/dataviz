import { Button as MuiButton } from "@mui/material";
import React from "react";

const classes = {
	start: {
		background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
		color: "#FFF",
		paddingLeft: "32px",
		paddingRight: "32px",
	},
};

export const Button = ({ children }) => {
	return (
		<>
			<MuiButton sx={classes.start} size="large">
				{children}
			</MuiButton>
		</>
	);
};
