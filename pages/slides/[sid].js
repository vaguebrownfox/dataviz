import React from "react";
import Slide from "../../src/components/Slide";
import { getAllSlideIds } from "../../src/libx/slides";
import classes from "../../src/styles/Slides.module.css";

const Slides = ({ sid, id }) => {
	return (
		<div className={classes.root}>
			<Slide id={sid} />
		</div>
	);
};

export default Slides;

export function getStaticPaths() {
	// Return a list of possible value for id
	const paths = getAllSlideIds();
	return {
		paths,
		fallback: false,
	};
}

export function getStaticProps({ params }) {
	// Fetch necessary data for the blog post using params.id
	return {
		props: {
			sid: params.sid,
			id: 1,
		},
	};
}
