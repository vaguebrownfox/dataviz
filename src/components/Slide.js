import React from "react";
import { ChangeArrows } from "./ChangeArrows";

// Slides
import Head from "next/head";
import Motivation from "./aslides/Motivation";
import Intro from "./aslides/Intro";
import Preface from "./aslides/Preface";
import InvarComp from "./aslides/InvarComp";
import Priorities from "./aslides/Priorities";
import DrawScatter from "./aslides/DrawScatter";

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
	const progs = {
		prev: `/slides/${parseInt(id) - 1}`,
		curr: `/slides/${parseInt(id)}`,
		next: `/slides/${parseInt(id) + 1}`,
	};

	switch (`${id}`) {
		case "1":
			return {
				progs: { ...progs, prev: `/slides/${id}` },
				title: "Motivation",
				component: <Motivation />,
			};
		case "2":
			return {
				progs,
				title: "Intro",
				component: <Intro />,
			};
		case "3":
			return {
				progs,
				title: "Priorities",
				component: <Priorities />,
			};
		case "4":
			return {
				progs,
				title: "General Theory",
				component: <Preface />,
			};
		case "5":
			return {
				progs,
				title: "Draw with D3",
				component: <DrawScatter />,
			};

		case "6":
			return {
				progs,
				title: "Invariant and Component",
				component: <InvarComp />,
			};
		case "7":
			return {
				progs,
				title: "Number of Components",
				component: <Preface />,
			};
		case "8":
			return {
				progs,
				title: "Length of Components",
				component: <Preface />,
			};
		case "9":
			return {
				progs: {
					...progs,
					next: `/slides/${id}`,
				},
				title: "Level of Organization",
				component: <Preface />,
			};
		default:
	}
};
