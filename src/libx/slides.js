export function getAllSlideIds() {
	// Returns an array that looks like this:
	const slides = [
		{
			params: {
				sid: "1",
			},
		},
		{
			params: {
				sid: "2",
			},
		},
	];

	return slides;
}

export function getSlideData(sid) {
	// Combine the data with the id
	return {
		sid,
		label: `${sid}-slide`,
	};
}
