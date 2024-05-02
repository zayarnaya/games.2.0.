import { FieldItem } from './types';

export const getDefaultField = (): FieldItem[][] => {
	const defaultField = [];
	for (let i = 0; i < 10; i++) {
		defaultField.push([]);
		for (let k = 0; k < 10; k++) {
			defaultField[i].push({
				hint: false,
				wrong: false,
				value: 0,
			});
		}
	}
	return defaultField;
};

export const getRowAndCol = (index: number) => {
	const row = Math.floor(index / 10);
	const col = index - row * 10;
	return { row, col };
};

export const getIndexFromRowAndCol = (row: number, col: number) => {
	return row * 10 + col;
};

export const isEqualDiff = (diff1: [number, number], diff2: [number, number]) => {
	const [row1, col1] = diff1;
	const [row2, col2] = diff2;
	return row1 === row2 && col1 === col2;
};
