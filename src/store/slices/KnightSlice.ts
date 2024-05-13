import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getDefaultField, removeHint, setHint } from '../helpers/knightHelpers';
import { FieldItem } from '../../games/Knight/types';

export interface KnightState {
    field: FieldItem[][],
    count: number,
    history: number[][],
    timer: string,
    win: boolean,
    fail: boolean,
}

const defaultField = getDefaultField();

const initialState: KnightState = {
    field: defaultField,
    count: 0,
    history: [],
    timer: '00:00:00',
    win: false,
    fail: false,
}

export const knightSlice = createSlice({
    name: 'knight',
    initialState,
    reducers: {
        onNextMove: (state, action) => {
            const {coords, coords2} = action.payload;
            const [row, col] = coords2;
            state.count++;
            const newField = removeHint(coords, state.field);
            state.field[row][col].value = state.count;
            if (state.count === 100) {
                state.win = true;
            }
            const history = state.history;
            history.push([row, col]);
            state.history = history;
            const hintField = setHint([row, col], newField);
            state.field = hintField || newField;
            if (!hintField) {
                state.fail = true;
            }
        },
        onUndoMove: (state) => {
            const [row, col] = state.history.pop();
            state.field[row][col].value = 0;
            state.count--;
        },
        setWrongMove: (state, action) => {
            const [row, col] = action.payload;
            const newField = [...state.field];
            newField[row][col].wrong = true;
            state.field = newField;
        },
        removeWrongMove: (state, action) => {
            const [row, col] = action.payload;
            const newField = [...state.field];
            newField[row][col].wrong = false;
            state.field = newField;
        },
        restart: (state) => {
            for (let key in initialState) {
                state[key] = initialState[key];
            }
        },
        onLoadGame: (state, action) => {
            const loadData = action.payload;
            for (let key in state) {
                state[key] = loadData[key] || initialState[key];
            }
        }
    },
})

// todo разобраться с типами
// todo убрать дубли в помощниках
export const { onNextMove, setWrongMove, removeWrongMove, onUndoMove, restart, onLoadGame } = knightSlice.actions;

export default knightSlice.reducer;
