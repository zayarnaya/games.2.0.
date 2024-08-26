import { defaultSequence, dimensions, tetrominos } from "./consts";
import { Playfield, Sequence, tetromino, TetrominoMatrix } from "./types";

const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomTetrominoName = () => {
    const randomInt = getRandomInt(0, defaultSequence.length - 1);
    return defaultSequence[randomInt];
}

const getNextTetromino = (name: Sequence) => {
    const matrix = tetrominos[name];
    const col = 3;
    const row = name === 'I' ? -2 : -1;

    return {name, matrix, row, col};
}

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
}

export const rotate = (matrix: TetrominoMatrix) => {
    const N = matrix.length - 1;
    const result = matrix.map((row, i) => row.map((val, j) => matrix[N - j][i]));
    return result;
}

export const isValidMove = (tetromino: tetromino, playfield: Playfield) => {
    const { matrix, row = 0, col = 0 } = tetromino;
    for (let i = 0; i < matrix.length; i++) {
        for (let k = 0; k < matrix[i].length; k++) {
            if (matrix[i][k] && (
                col + k < 0 ||
                col + k >= playfield[0].length ||
                row + i >= playfield.length ||
                (playfield[row + i] && playfield[row + i][col + k])
            )) {
                return false;
            }
        }
    }
    return true;
} 
