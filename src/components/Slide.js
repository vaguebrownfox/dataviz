import React from "react";
import { ChangeArrows } from "./ChangeArrows";

const Slide = ({ slideData: sd }) => {
	const [slide, setSlide] = React.useState(0);
	return (
		<>
			<h2>{sd.label}</h2>
			<ChangeArrows />
		</>
	);
};

export default Slide;
