import { useRef, useEffect } from "react";

const useSize = (setSize) => {
	const containerRef = useRef(null);

	useEffect(() => {
		const container = containerRef.current;

		const s = {
			height: container.clientHeight,
			width: container.clientWidth,
		};

		setSize(s);
	}, []);

	return [containerRef];
};

export default useSize;
