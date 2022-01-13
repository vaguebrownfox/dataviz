import { useRef, useEffect, useState } from "react";

const useSvgStatic = (draw, width, height) => {
	const svgRef = useRef(null);

	useEffect(() => {
		const render = async () => {
			await draw(svgRef);
		};
		render();
	}, [draw, width, height]);

	return svgRef;
};

export default useSvgStatic;
