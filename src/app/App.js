import * as React from "react";
import { Box, Typography } from "@mui/material";
import Voronoi from "../components/viz/Voronoi";

import classes from "../styles/App.module.css";
import { Button } from "../components/Button";
import Link from "../components/Link";

const App = React.memo(function App() {
	return (
		<>
			<Box
				className={classes.box}
				display="flex"
				flexDirection={"column"}
				justifyContent={"center"}
				alignItems={"center"}
				minHeight={"80vh"}
			>
				<Typography
					sx={{ paddingBottom: 16 }}
					variant="h6"
					gutterBottom
				>
					Jeevan K | Lab Talk | 14th Jan'22
				</Typography>
				<Link href="/slides/1" style={{ textDecoration: "none" }}>
					<Button>Start</Button>
				</Link>
			</Box>

			<Voronoi />
		</>
	);
});

export default App;
