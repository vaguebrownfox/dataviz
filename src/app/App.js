import * as React from "react";
import { Box } from "@mui/material";
import Voronoi from "../components/viz/Voronoi";

import classes from "../styles/App.module.css";
import { Button } from "../components/Button";
import Link from "../components/Link";

const App = React.memo(function App() {
	return (
		<>
			<Box className={classes.box} display="flex" minHeight={"80vh"}>
				<Link href="/slides/1" style={{ textDecoration: "none" }}>
					<Button>Start</Button>
				</Link>
			</Box>

			<Voronoi />
		</>
	);
});

export default App;
