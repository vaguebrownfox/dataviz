import React from "react";
import useSvgStatic from "../hooks/useSvgStatic";

export const SvgStatic = (props) => {
	const { draw, options, style, refresh, ...otherProps } = props;

	const [width, setWidth] = React.useState(0);
	const [height, setHeight] = React.useState(0);

	const svgRef = useSvgStatic(draw, width, height);

	React.useEffect(() => {
		const height = svgRef.current.height.baseVal.value;
		const width = svgRef.current.width.baseVal.value;

		setWidth(width);
		setHeight(height);
	}, [refresh, svgRef]);

	return <svg ref={svgRef} {...otherProps} style={{ ...style }} />;
};
