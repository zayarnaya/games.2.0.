import { Sequence, TetrominoMatrix } from "./types";

export const dimensions = {
    width: 10,
    height: 20,
    cellSize: 30,
}
export const tetrominos: Record<Sequence, TetrominoMatrix> = {
    I: [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    J: [
      [1, 0, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
    L: [
      [0, 0, 1],
      [1, 1, 1],
      [0, 0, 0],
    ],
    O: [
      [1, 1],
      [1, 1],
    ],
    S: [
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0],
    ],
    Z: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
    T: [
      [0, 1, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
  };
  
  export const gray = '#D9D9D9';
  export const defaultSequence: Array<Sequence> = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];
  
  export const maxMobileWidth = 768;
  
  export const fillGameCanvas = 'rgba(255, 255, 255, 0';
  
  export const lineScore: Record<number, number> = {
    0: 0,
    1: 40,
    2: 100,
    3: 300,
  }

  export const colors: Record<Sequence, string> = {
    I: '#FFDD00',
    O: '#0DCAF0',
    T: '#EE82EE',
    S: '#CB0000',
    Z: '#FFA500',
    J: '#0000FF',
    L: '#008000',
  };
