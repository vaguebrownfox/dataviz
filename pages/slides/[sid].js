import React from "react";
import Slide from "../../src/components/Slide";
import { getAllSlideIds } from "../../src/libx/slides";
import classes from "../../src/styles/Slides.module.css";

const Slides = ({ sid }) => {
	return (
		<div className={classes.root}>
			<Slide {...{ sid }} />
		</div>
	);
};

export default Slides;

export async function getStaticPaths() {
	// Return a list of possible value for id
	const paths = getAllSlideIds();
	return {
		paths,
		fallback: true,
	};
}

export async function getStaticProps({ params }) {
	// Fetch necessary data for the blog post using params.id
	return {
		props: {
			sid: params.sid,
		},
	};
}
