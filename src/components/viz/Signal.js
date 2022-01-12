import React from "react";
import { Svg } from "../Svg";
import * as d3 from "d3";

// Styles
import classes from "../../styles/SvgDraw.module.css";

const Signal = () => {
	async function drawSig(svgRef) {
		let height = 500;
		let width = 1000;

		const nLayers = 10;
		const mSamples = 1000;
		const kBumps = 30;

		const svg = d3
			.select(svgRef.current)
			.attr("viewBox", [0, 0, width, height]);

		// Randomize
		const bump = (a, n) => {
			const x = 1 / (0.1 + Math.random());
			const y = 2 * Math.random() - 0.5;
			const z = 10 / (0.1 + Math.random());
			for (let i = 0; i < n; ++i) {
				const w = (i / n - y) * z;
				a[i] += x * Math.exp(-w * w);
			}
		};

		const bumps = (n, m) => {
			const a = [];
			for (let i = 0; i < n; ++i) a[i] = 0;
			for (let i = 0; i < m; ++i) bump(a, n);
			return a;
		};

		const offset = d3.stackOffsetWiggle;

		const stack = d3
			.stack()
			.keys(d3.range(nLayers))
			.offset(offset)
			.order(d3.stackOrderNone);

		const randomize = () => {
			const layers = stack(
				d3.transpose(
					Array.from({ length: nLayers }, () =>
						bumps(mSamples, kBumps)
					)
				)
			);
			yScale.domain([
				d3.min(layers, (l) => d3.min(l, (d) => d[0])),
				d3.max(layers, (l) => d3.max(l, (d) => d[1])),
			]);
			return layers;
		};

		// x y z
		const xScale = d3.scaleLinear([0, mSamples - 1], [0, width]);
		const yScale = d3.scaleLinear([0, 1], [height, 0]);
		const zColor = d3.interpolateCividis;

		// Area
		const area = d3
			.area()
			.x((_, i) => xScale(i))
			.y0((d) => yScale(d[0]))
			.y1((d) => yScale(d[1]));

		const path = svg.selectAll("path").data(randomize).join("path");

		await path
			.data(randomize)
			.transition()
			.delay(0)
			.duration(12000)
			.attr("d", area)
			.attr("fill", () => zColor(Math.random()))
			.end();
	}

	return (
		<div className={classes.svgDraw}>
			<Svg
				className={classes.svg}
				style={{ opacity: 0.4 }}
				draw={drawSig}
			/>
		</div>
	);
};

export default Signal;
