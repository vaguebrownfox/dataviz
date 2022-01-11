import * as React from "react";
import { Box, Link, Typography } from "@mui/material";
import Voronoi from "../components/viz/Voronoi";

import classes from "../styles/App.module.css";
import { Button } from "../components/Button";

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
				<Link href="/slides/1" style={{ textDecoration: "none" }}>
					<div className={classes.title}>
						<Typography
							className={classes.txt}
							variant="h5"
							component="div"
						>
							Jeevan K
						</Typography>
						<Typography
							className={classes.txt}
							variant="h5"
							component="div"
						>
							| Lab Talk |
						</Typography>
						<Typography
							className={classes.txt}
							variant="h5"
							component="div"
						>
							14th Jan'22
						</Typography>
					</div>
				</Link>

				{/* <Button>Start</Button> */}
			</Box>

			<Voronoi />
		</>
	);
});

export default App;
