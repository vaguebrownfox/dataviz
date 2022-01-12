import { Link } from "@mui/material";
import React from "react";
import { Button } from "../../src/components/Button";
import Slide from "../../src/components/Slide";
import Voronoi from "../../src/components/viz/Voronoi";
import { getAllSlideIds, getSlideData } from "../../src/libx/slides";
import classes from "../../src/styles/Slides.module.css";

const Slides = ({ slideData }) => {
	return (
		<div className={classes.blank}>
			<Link href="/slides/1" style={{ textDecoration: "none" }}>
				<Button>Start</Button>
			</Link>
			<Voronoi />
		</div>
	);
};

export default Slides;
