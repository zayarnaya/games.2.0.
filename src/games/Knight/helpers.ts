export const getRowAndCol = (index: number) => {
	const row = Math.floor(index / 10);
	const col = index - row * 10;
	return { row, col };
};

export const getIndexFromRowAndCol = (row: number, col: number) => {
	return row * 10 + col;
};
