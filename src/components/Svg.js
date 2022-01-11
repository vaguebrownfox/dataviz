import React from "react";
import useSvg from "../hooks/useSvg";

export const Svg = (props) => {
	const { draw, options, ...otherProps } = props;

	const svgRef = useSvg(draw);

	return <svg ref={svgRef} {...otherProps} />;
};