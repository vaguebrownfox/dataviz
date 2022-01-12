import { useRef, useEffect } from "react";

const useSvgStatic = (draw) => {
	const svgRef = useRef(null);

	useEffect(() => {
		await draw(svgRef);
	}, [draw]);

	return svgRef;
};

export default useSvgStatic;
