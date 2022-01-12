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
		progs: { prev: `/`, curr: `/slides/${1}`, next: `/slides/${2}` },
		component: <Intro />,
	},
	2: {
		sid: "2",
		title: "Motivation",
		progs: {
			prev: `/slides/${1}`,
			curr: `/slides/${2}`,
			next: `/slides/${3}`,
		},
		component: <Motivation />,
	},
	3: {
		sid: "3",
		title: "Motivation",
		progs: { prev: `/slides/${2}`, curr: `/slides/${3}`, next: `/` },
		component: <Motivation />,
	},
};
