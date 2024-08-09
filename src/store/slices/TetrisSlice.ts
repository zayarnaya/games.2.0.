import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getDefaultPlayfield } from 'src/games/Tetris/helpers';
import { Playfield, tetromino } from 'src/games/Tetris/types';
import { defaults } from '../consts/TetrisConsts';

export interface TetrisState {
    field: Playfield;
    currentTetromino: tetromino;
    nextTetromino: tetromino;
    score: number;
    time: string;
    speed: number;
    level: number;
    lineCount: number;
}

const field = getDefaultPlayfield();

const initialState: TetrisState = {
    field,
    currentTetromino: null,
    nextTetromino: null,
    score: defaults.score,
    time: defaults.time,
    speed: defaults.speed,
    level: defaults.level,
    lineCount: defaults.lineCount,
}

export const tetrisSlice = createSlice({
  name: 'tetris',
  initialState,
  reducers: {
    resetToDefaults: (state) => {
        for (let key in initialState) {
            state[key] = initialState[key];
        }
    },
    updatePlayfield: (state, action) => {
        state.field = action.payload;
    },
    updateCurrentTetromino: (state, action) => {
        state.currentTetromino = action.payload;
    },
  },
})

export const {  } = tetrisSlice.actions;

export default tetrisSlice.reducer;
