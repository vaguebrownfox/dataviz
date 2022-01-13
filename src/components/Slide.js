import React from "react";
import { ChangeArrows } from "./ChangeArrows";

// Slides
import Head from "next/head";
import Motivation from "./aslides/Motivation";
import Intro from "./aslides/Intro";
import Preface from "./aslides/Preface";

const Slide = ({ id }) => {
	return (
		<>
			<Head>
				<title>{p(id).title}</title>
			</Head>
			{p(id).component}
			<ChangeArrows progs={p(id).progs} />
		</>
	);
};

export default Slide;

export const p = (id) => {
	switch (`${id}`) {
		case "1":
			return {
				progs: {
					prev: `/`,
					curr: `/slides/${1}`,
					next: `/slides/${2}`,
				},
				title: "Motivation",
				component: <Motivation />,
			};
		case "2":
			return {
				progs: {
					prev: `/slides/${1}`,
					curr: `/slides/${2}`,
					next: `/slides/${3}`,
				},
				title: "Intro",
				component: <Intro />,
			};
		case "3":
			return {
				progs: {
					prev: `/slides/${2}`,
					curr: `/slides/${3}`,
					next: `/`,
				},
				title: "Preface",
				component: <Preface />,
			};
		default:
	}
};
