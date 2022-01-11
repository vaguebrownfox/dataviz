import React from "react";
import { Canvas } from "../Canvas";
import * as d3 from "d3";

// Styles
import classes from "../../styles/CanvasDraw.module.css";
import useSize from "../../hooks/useSize";
import { blue } from "@mui/material/colors";
import theme from "../../styles/theme";

const Voronoi = () => {
	const [size, setSize] = React.useState({ height: 0, width: 0 });

	const [contRef] = useSize(setSize);

	function* circle(cx, cy, r, n, da) {
		for (let i = 0; i < n; ++i) {
			const a = (i * 2 * Math.PI) / n + da;
			yield [cx + Math.cos(a) * r, cy + Math.sin(a) * r];
		}
	}

	function* circles(now, w, h) {
		const t = now / 360;
		const cx = w / 2;
		const cy = h / 2;
		yield* circle(cx, cy, 300, 9, -0.001 * t);
		yield* circle(cx, cy, 100, 6, 0.03 * t);
		yield* circle(cx, cy, 60, 3, -0.05 * t);
		yield* circle(cx, cy, 15, 3, -0.02 * t);
		yield* circle(cx, cy, 1, 1, -0.02 * t);
		yield* circle(-250 + cx, -120 + cy, 180, 6, -0.02 * t);
		yield* circle(-230 + cx, -120 + cy, 30, 1, -0.02 * t);
		yield* circle(-280 + cx, 120 + cy, 40, 12, 0.02 * t);
		yield* circle(-290 + cx, 120 + cy, 20, 3, -0.02 * t);
		yield* circle(-490 + cx, 120 + cy, 0, 3, 0.02 * t);
	}

	function resample(curve, points) {
		const n = points.length;
		let p0,
			p1 = points[n - 1];
		let x0,
			x1 = p1[0];
		let y0,
			y1 = p1[1];
		curve.lineStart();
		for (let i = 0; i < n; ++i) {
			(p0 = p1), (x0 = x1), (y0 = y1);
			(p1 = points[i]), (x1 = p1[0]), (y1 = p1[1]);
			if (x0 === x1 && y0 === y1) continue;
			curve.point((x0 * 2 + x1) / 3, (y0 * 2 + y1) / 3);
			curve.point((x0 + x1 * 2) / 3, (y0 + y1 * 2) / 3);
			curve.point(...p1);
		}
		curve.lineEnd();
	}

	function drawVornoi(ctx) {
		// ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

		const curve = d3.curveBasisClosed(ctx);

		const points = [
			...this.circles(Date.now(), ctx.canvas.width, ctx.canvas.height),
		];
		const voronoi = d3.Delaunay.from(points).voronoi([
			0,
			0,
			ctx.canvas.width,
			ctx.canvas.height,
		]);

		// ctx.fillStyle = `${blue[100]}`;
		// ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

		var grd = ctx.createLinearGradient(
			ctx.canvas.width * 0.5,
			ctx.canvas.height * 0,
			ctx.canvas.width * 0.5,
			ctx.canvas.height
		);
		grd.addColorStop(0, "white");
		grd.addColorStop(1, theme.palette.secondary.light);
		ctx.fillStyle = grd;
		ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

		ctx.lineWidth = 0;
		ctx.strokeStyle = theme.palette.secondary.light;
		ctx.fillStyle = "#fff";
		ctx.beginPath();
		for (let i = 0, n = points.length; i < n; ++i) {
			const cell = voronoi.cellPolygon(i);
			if (cell === null) continue;
			this.resample(curve, cell);
		}
		ctx.fill();
		ctx.stroke();
	}

	React.useEffect(() => {}, []);

	return (
		<div ref={contRef} className={classes.cnvDraw}>
			<Canvas
				className={classes.cnv}
				draw={drawVornoi.bind({ circles, resample })}
				options={{ context: "2d" }}
			/>
		</div>
	);
};

export default Voronoi;
