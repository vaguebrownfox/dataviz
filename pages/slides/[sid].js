import React from "react";
import Slide from "../../src/components/Slide";
import { getAllSlideIds, getSlideData } from "../../src/libx/slides";

const Slides = ({ slideData }) => {
	return (
		<div>
			<Slide {...{ slideData }} />
		</div>
	);
};

export default Slides;

export async function getStaticPaths() {
	// Return a list of possible value for id
	const paths = getAllSlideIds();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	// Fetch necessary data for the blog post using params.id
	const slideData = getSlideData(params.sid);
	return {
		props: {
			slideData,
		},
	};
}
