export const resizeCanvas = (canvas, ctx) => {
	const { height, width } = canvas.getBoundingClientRect();

	if (canvas.height !== height || canvas.width !== width) {
		const { devicePixelRatio: ratio = 1 } = window;
		// const context = canvas.getContext( "2d");
		canvas.height = height;
		canvas.width = width;
		ctx.scale(ratio, ratio);

		return true;
	}

	return false;
};
