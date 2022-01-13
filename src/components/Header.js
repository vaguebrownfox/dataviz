import { GitHub as GitHubIcon } from "@mui/icons-material";
import { AppBar, Box, Link, Toolbar } from "@mui/material";
import * as React from "react";
import { PROJECT_LINK, PROJECT_NAME } from "../utils/config";
import theme from "../styles/theme";

const classes = {
	appBar: {
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		width: "100%",
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
};

const Header = React.memo(function Header() {
	return (
		<AppBar sx={classes.appBar} position="fixed" color="primary">
			<Toolbar>
				<Box fontSize="h6.fontSize" flexGrow={1}>
					<Link
						href="/"
						style={{ textDecoration: "none", color: "white" }}
					>
						{PROJECT_NAME}
					</Link>
				</Box>
				<Link
					href={PROJECT_LINK}
					target="_blank"
					style={{ textDecoration: "none", color: "white" }}
				>
					<Box>
						<GitHubIcon sx={{ color: "white" }} />
					</Box>
				</Link>
			</Toolbar>
		</AppBar>
	);
});

export default Header;
