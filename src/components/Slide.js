import React from "react";
import { ChangeArrows } from "./ChangeArrows";

// Slides
import Intro from "./aslides/Intro";
import Motivation from "./aslides/Motivation";
import Head from "next/head";

const Slide = ({ sid }) => {
	const { progs, component, title } = slides[sid];
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			{component}
			<ChangeArrows progs={progs} />
		</>
	);
};

export default Slide;

export const slides = {
	1: {
		sid: "1",
		title: "Intro",
		progs: { prev: 1, curr: 1, next: 2 },
		component: <Intro />,
	},
	2: {
		sid: "2",
		title: "Motivation",
		progs: { prev: 1, curr: 2, next: 3 },
		component: <Motivation />,
	},
	3: {
		sid: "3",
		title: "Motivation",
		progs: { prev: 1, curr: 2, next: 3 },
		component: <Motivation />,
	},
};
