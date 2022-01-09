import * as React from "react";
import { Box } from "@mui/material";
import Link from "../components/Link";

const Footer = React.memo(function Footer() {
	return (
		<footer>
			<Box
				color="text.hint"
				fontSize="caption.fontSize"
				display="flex"
				alignItems="center"
				justifyContent="center"
				p={1}
				mt={3}
			>
				Made with&nbsp;
				<Box color="error.main">&hearts;&nbsp;</Box>
				by&nbsp;
				<Link
					href="https://twitter.com/vaguebrownfox"
					color="inherit"
					target="_blank"
					rel="noopener noreferrer"
				>
					@vaguebrownfox
				</Link>
			</Box>
		</footer>
	);
});

export default Footer;
