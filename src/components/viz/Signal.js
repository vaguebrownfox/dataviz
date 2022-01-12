import React from "react";
import { Svg } from "../Svg";
import * as d3 from "d3";

// Styles
import classes from "../../styles/SvgDraw.module.css";
import useSize from "../../hooks/useSize";
import { blue } from "@mui/material/colors";
import theme from "../../styles/theme";

const Signal = () => {
	const [size, setSize] = React.useState({ height: 0, width: 0 });

	const [contRef] = useSize(setSize);

	const stack = d3
		.stack()
		.keys(d3.range(20))
		.offset(d3.stackOffsetWiggle)
		.order(d3.stackOrderNone);

	const area = d3
		.area()
		.x((d, i) => x(i))
		.y0((d) => y(d[0]))
		.y1((d) => y(d[1]));

	// Inspired by Lee Byron’s test data generator.
	function bump(a, n) {
		const x = 1 / (0.1 + Math.random());
		const y = 2 * Math.random() - 0.5;
		const z = 10 / (0.1 + Math.random());
		for (let i = 0; i < n; ++i) {
			const w = (i / n - y) * z;
			a[i] += x * Math.exp(-w * w);
		}
	}

	function bumps(n, m) {
		const a = [];
		for (let i = 0; i < n; ++i) a[i] = 0;
		for (let i = 0; i < m; ++i) bump(a, n);
		return a;
	}

	function randomize() {
		const n = 10;
		const m = 200;
		const k = 2;

		const layers = stack(
			d3.transpose(Array.from({ length: n }, () => bumps(m, k)))
		);
		y.domain([
			d3.min(layers, (l) => d3.min(l, (d) => d[0])),
			d3.max(layers, (l) => d3.max(l, (d) => d[1])),
		]);
		return layers;
	}

	const x = d3.scaleLinear([0, 200 - 1], [0, 1000]);
	const y = d3.scaleLinear([0, 1], [500, 0]);
	const z = d3.interpolateWarm;

	async function drawSig(svgRef) {
		const svg = d3
			.select(svgRef.current)
			.attr("viewBox", [0, 0, 1000, 500]);

		const path = svg.selectAll("path").data(this.randomize).join("path");

		return await path
			.data(this.randomize)
			.transition()
			.delay(0)
			.duration(32000)
			.attr("d", this.area)
			.attr("fill", () => this.z(Math.random()))
			.end();

		// return { path, randomize };
	}

	return (
		<div ref={contRef} className={classes.svgDraw}>
			<Svg
				className={classes.svg}
				style={{ opacity: 0.3 }}
				draw={drawSig.bind({ randomize, x, y, z, area })}
			/>
		</div>
	);
};

export default Signal;
