export const copyMatrix = (matrix: unknown[][]) => {
	const res = [];
	for (const el of matrix) {
		res.push([...el]);
	}
	return res;
};
