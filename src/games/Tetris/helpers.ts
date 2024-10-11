import { colors, defaultSequence, dimensions, tetrominos } from './consts';
import { Playfield, Sequence, tetromino, TetrominoMatrix } from './types';

const getRandomInt = (min: number, max: number) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomTetrominoName = () => {
	const randomInt = getRandomInt(0, defaultSequence.length - 1);
	return defaultSequence[randomInt];
};

const getNextTetromino = (name: Sequence) => {
	const matrix = tetrominos[name];
	const col = 3;
	const row = name === 'I' ? -2 : -1;

	return { name, matrix, row, col };
};

export const getRandomTetromino = () => getNextTetromino(getRandomTetrominoName());

export const getDefaultPlayfield = (): Playfield => {
	const newPlayField = [];
	for (let row = -2; row < dimensions.height; row++) {
		newPlayField[row] = [];
		for (let col = 0; col < dimensions.width; col++) {
			newPlayField[row][col] = undefined;
		}
	}
	return newPlayField;
};

export const rotate = (matrix: TetrominoMatrix) => {
	const N = matrix.length - 1;
	const result = matrix.map((row, i) => row.map((val, j) => matrix[N - j][i]));
	return result;
};

export const isValidMove = (tetromino: tetromino, playfield: Playfield) => {
	const { matrix, row = 0, col = 0 } = tetromino;
	for (let i = 0; i < matrix.length; i++) {
		for (let k = 0; k < matrix[i].length; k++) {
			if (
				matrix[i][k] &&
				(col + k < 0 ||
					col + k >= playfield[0].length ||
					row + i >= playfield.length ||
					(playfield[row + i] && playfield[row + i][col + k]))
			) {
				return false;
			}
		}
	}
	return true;
};

export const drawField = (ctx: CanvasRenderingContext2D) => {
	const { width, height, cellSize } = dimensions;
	ctx.beginPath();
	for (let i = 0; i <= width; i++) {
		ctx.moveTo(cellSize * i, 0);
		ctx.lineTo(cellSize * i, cellSize * height);
	}
	for (let k = 0; k <= height; k++) {
		ctx.moveTo(0, cellSize * k);
		ctx.lineTo(cellSize * width, cellSize * k);
	}

	ctx.fillStyle = 'white';
	ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	ctx.stroke();
};

export const colorField = (ctx: CanvasRenderingContext2D, field?: Playfield, fill?: string) => {
	// fill && (ctx.fillStyle = fill);
	// stroke && (ctx.strokeStyle = stroke);
	let upperRow = 0;
	for (let row = 0; row < dimensions.height; row++) {
		let filled = 0;
		for (let col = 0; col < dimensions.width; col++) {
			if (field[row][col]) {
				filled++;
				const name = field[row][col];
				ctx.fillStyle = fill ? fill : name ? colors[name as Sequence] : 'white';
				ctx.fillRect(
					col * dimensions.cellSize + 1,
					row * dimensions.cellSize + 1,
					dimensions.cellSize - 2,
					dimensions.cellSize - 2
				);
			}
		}
		if (filled) {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			upperRow++;
		}
	}
};

export const colorTetromino = (ctx: CanvasRenderingContext2D, currentTetromino: tetromino, color: string) => {
	const { cellSize } = dimensions;
	ctx.fillStyle = color;
	for (let row = 0; row < currentTetromino.matrix.length; row++) {
		for (let col = 0; col < currentTetromino.matrix[row].length; col++) {
			if (currentTetromino.matrix[row][col]) {
				ctx.fillRect(
					(currentTetromino.col + col) * cellSize + 1,
					(currentTetromino.row + row) * cellSize + 1,
					cellSize - 2,
					cellSize - 2
				);
			}
		}
	}
};
