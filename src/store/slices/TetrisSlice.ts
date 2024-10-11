import { createSlice } from '@reduxjs/toolkit';
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
	started: boolean;
	end: boolean;
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
	started: false,
	end: false,
};

export const tetrisSlice = createSlice({
	name: 'tetris',
	initialState,
	reducers: {
		resetToDefaults: state => {
			for (const key in initialState) {
				Object.assign(state, { [key]: initialState[key as keyof TetrisState] });
			}
		},
		updatePlayfield: (state, action) => {
			state.field = action.payload;
		},
		updateCurrentTetromino: (state, action) => {
			state.currentTetromino = action.payload;
		},
		updateNextTetromino: (state, action) => {
			state.nextTetromino = action.payload;
		},
	},
});

export const { resetToDefaults, updatePlayfield, updateCurrentTetromino, updateNextTetromino } = tetrisSlice.actions;

export default tetrisSlice.reducer;
