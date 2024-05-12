import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { LineHistoryItem, LineItem } from '../../games/Line/types';
import { getDefaultArray } from '../../games/Line/helpers';

export interface LineState {
    history: LineHistoryItem[];
    arr: LineItem[];
    score: number;
    timer: string;
}

const startArray = getDefaultArray();

const initialState: LineState = {
    history: [],
    arr: startArray,
    score: 0,
    timer: '00:00:00',
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
        state.history.push({idx, length})
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
    },
    onRestart: (state) => {
        state.arr = initialState.arr;
        state.history = initialState.history;
        state.score = initialState.score;
        state.timer = initialState.timer;
    },
    onLoadGame: (state, action) => {
        state.arr = action.payload.arr || initialState.arr;
        state.history = action.payload.history || initialState.history;
        state.score = action.payload.score || initialState.score;
        state.timer = action.payload.timer || initialState.timer;
    }
  },
})

export const { onDeleteChars, onNext, onUndo, onRestart, onLoadGame } = lineSlice.actions;

export default lineSlice.reducer;
