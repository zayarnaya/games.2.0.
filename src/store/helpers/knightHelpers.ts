import { FieldItem } from '../../games/Knight/types';
import { legitMoves } from '../consts/knightConsts';

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

export const removeHint = (coords: [number, number], field: FieldItem[][]) => {
	const [row, col] = coords;
	const newField = [...field];
	for (const move of legitMoves) {
		if (newField[row + move[0]] && newField[row + move[0]][col + move[1]]) {
			newField[row + move[0]][col + move[1]] = { ...newField[row + move[0]][col + move[1]], hint: false };
		}
	}
	return newField;
};

export const setHint = (coords: [number, number], field: FieldItem[][]) => {
	const [row, col] = coords;
	const newField = [...field];
	let count = 0;
	for (const move of legitMoves) {
		if (
			newField[row + move[0]] &&
			newField[row + move[0]][col + move[1]] &&
			!newField[row + move[0]][col + move[1]].value
		) {
			count++;
			newField[row + move[0]][col + move[1]] = { ...newField[row + move[0]][col + move[1]], hint: true };
		}
	}
	if (!count) return null;
	return newField;
};
