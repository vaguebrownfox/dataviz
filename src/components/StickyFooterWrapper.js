import * as React from "react";
import { Box } from "@mui/material";

const classes = {
	footerSelector: {
		"& > footer": {
			marginTop: "auto",
		},
		// border: "1px solid red",
	},
};

const StickyFooterWrapper = React.memo(function StickyFooterWrapper(props) {
	return (
		<Box
			sx={classes.footerSelector}
			display="flex"
			flexDirection="column"
			minHeight="100vh"
			flexGrow={1}
			className={classes.footerSelector}
			{...props}
		/>
	);
});

export default StickyFooterWrapper;
