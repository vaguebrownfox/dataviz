import { slides } from "../components/Slide";

export function getAllSlideIds() {
	// Returns an array that looks like this:

	const keys = Object.keys(slides);

	const sids = keys.map((k) => ({ params: { sid: slides[k].sid } }));

	return sids;
}
