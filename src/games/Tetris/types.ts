export type Sequence = 'I' | 'J' | 'L' | 'O' | 'S' | 'T' | 'Z';
export type TetrominoMatrix = (0 | 1)[][];
export type tetromino = {
    name?: string,
    matrix?: TetrominoMatrix,
    row?: number,
    col?: number,
}
export type Playfield = (Sequence | undefined)[][];
