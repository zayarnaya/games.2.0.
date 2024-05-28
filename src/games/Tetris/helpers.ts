import { Playfield, tetromino, TetrominoMatrix } from "./types";

export const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
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
                playfield[row + i][col + k]
            )) {
                return false;
            }
        }
    }
    return true;
} 
