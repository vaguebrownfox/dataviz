export function getAllSlideIds() {
	// Returns an array that looks like this:
	// [
	//   {
	//     params: {
	//       id: 'ssg-ssr'
	//     }
	//   },
	//   {
	//     params: {
	//       id: 'pre-rendering'
	//     }
	//   }
	// ]

	// const keys = [1, 2, 3];

	// const sids = keys.map((_, i) => ({ params: { sid: `${i + 1}` } }));

	const sids = [
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
		{
			params: {
				sid: "3",
			},
		},
	];

	return sids;
}
