import { createSlice } from '@reduxjs/toolkit';
// @ts-ignore
import type { PayloadAction } from '@reduxjs/toolkit';
import { LineHistoryItem, LineItem } from '../../games/Line/types';
import { getDefaultArray } from '../../games/Line/helpers';
import { lineFailCount, lineScoring } from '../consts/lineConsts';

export interface LineState {
    history: LineHistoryItem[];
    arr: LineItem[];
    score: number;
    timer: string;
    win: boolean;
    fail: boolean;
    continued: boolean;
}

const startArray = getDefaultArray();

const initialState: LineState = {
    history: [],
    arr: startArray,
    score: 0,
    timer: '',
    win: false,
    fail: false,
    continued: false,
}

export const lineSlice = createSlice({
  name: 'line',
  initialState,
  reducers: {
    onDeleteChars: (state, action) => {
        const {idx, length} = action.payload;
        const [x, y] = idx;
        state.arr[x].deleted = true;
        state.arr[y].deleted = true;
        state.history.push({idx, length});
        state.score += lineScoring.delete;
    },
    onNext: (state, action) => {
        const length = state.arr.length;
        state.arr = [...action.payload];
        const history = state.history;
        history.push({
            idx: [],
            length,
        });
        state.history = history;
        state.score += lineScoring.next;
        if (state.arr.length > lineFailCount) state.fail = true;
    },
    onUndo: (state) => {
        const {idx, length} = state.history.pop();
        console.log(idx, length);
        if (idx.length) {
            const [x, y] = idx;
            state.arr[x].deleted = false;
            state.arr[y].deleted = false;
        }
        const arr = state.arr.slice(0, length);
        state.arr = arr;
        state.score = Math.max(state.score + lineScoring.undo, 0);
    },
    onRestart: (state) => {
        for (let key in initialState) {
            // @ts-ignore
            state[key] = initialState[key as keyof LineState];
        }
    },
    onContinue: (state) => {
        state.continued = true;
    },
    onLoadGame: (state, action) => {
        for (let key in state) {
            // @ts-ignore
            state[key] = action.payload[key] || initialState[key as keyof LineState];
        }
    },
    startTimer: (state) => {
        state.timer = '00:00:00';
    },
    resetTimer: (state) => {
        state.timer = initialState.timer;
    },
    onVictory: (state) => {
        state.win = true;
        state.score += lineScoring.win;
    },
  },
})

export const { onContinue, onVictory, onDeleteChars, onNext, onUndo, onRestart, onLoadGame, startTimer, resetTimer } = lineSlice.actions;

export default lineSlice.reducer;
