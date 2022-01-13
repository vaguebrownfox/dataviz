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

	const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	const sids = keys.map((s, _) => ({ params: { sid: `${s}` } }));

	// const sids = [
	// 	{
	// 		params: {
	// 			sid: "1",
	// 		},
	// 	},
	// 	{
	// 		params: {
	// 			sid: "2",
	// 		},
	// 	},
	// 	{
	// 		params: {
	// 			sid: "3",
	// 		},
	// 	},
	// ];

	return sids;
}
