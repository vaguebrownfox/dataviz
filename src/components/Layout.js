import * as React from "react";
import { Box, Toolbar } from "@mui/material";

import Header from "./Header";
import Footer from "./Footer";
import StickyFooterWrapper from "./StickyFooterWrapper";

const Layout = React.memo(function Layout({ children }) {
	return (
		<Box>
			<Header />
			<StickyFooterWrapper>
				<Toolbar />
				<Box p={3}>{children}</Box>
				<Footer />
			</StickyFooterWrapper>
		</Box>
	);
});

export default Layout;
