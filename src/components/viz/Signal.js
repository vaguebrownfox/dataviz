import React from "react";
import { Svg } from "../Svg";
import * as d3 from "d3";

// Styles
import classes from "../../styles/CanvasDraw.module.css";
import useSize from "../../hooks/useSize";
import { blue } from "@mui/material/colors";
import theme from "../../styles/theme";

const Signal = () => {
	const [size, setSize] = React.useState({ height: 0, width: 0 });

	const [contRef] = useSize(setSize);

	function drawSig(svgRef) {
		const svg = d3
			.select(svgRef.current)
			.attr("viewBox", [0, 0, size.width, size.height]);

		const path = svg
			.selectAll("path")
			.data(randomize)
			.join("path")
			.attr("d", area)
			.attr("fill", () => z(Math.random()));

		//   while (true) {
		//     // yield svg.node();

		//     await path
		//       .data(randomize)
		//       .transition()
		//         .delay(1000)
		//         .duration(1500)
		//         .attr("d", area)
		//       .end();
		//   }
	}

	React.useEffect(() => {}, []);

	return (
		<div ref={contRef} className={classes.cnvDraw}>
			<Svg className={classes.cnv} draw={drawSig} />
		</div>
	);
};

export default Signal;
