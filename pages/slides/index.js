import React from "react";
import Slide from "../../src/components/Slide";
import { getAllSlideIds, getSlideData } from "../../src/libx/slides";
import classes from "../../src/styles/Slides.module.css";

const Slides = ({ slideData }) => {
	return (
		<div className={classes.root}>
			<Slide {...{ slideData: { label: "0" } }} />
		</div>
	);
};

export default Slides;
