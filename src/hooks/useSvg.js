import { useRef, useEffect } from "react";

const useSvg = (draw, options = {}) => {
	const svgRef = useRef(null);

	useEffect(() => {
		const svg = svgRef.current;

		let frameCount = 0;
		let animationFrameId;

		const render = () => {
			frameCount++;
			draw(context, frameCount);
			animationFrameId = window.requestAnimationFrame(render);
		};
		render();

		return () => {
			window.cancelAnimationFrame(animationFrameId);
		};
	}, [draw]);

	return svgRef;
};

export default useSvg;
