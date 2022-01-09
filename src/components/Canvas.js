import React from "react";
import useCanvas from "../hooks/useCanvas";

export const Canvas = (props) => {
	const { draw, options, ...otherProps } = props;

	const { context, ...otherOptions } = options;

	const canvasRef = useCanvas(draw, { context });

	return <canvas ref={canvasRef} {...otherProps} />;
};
