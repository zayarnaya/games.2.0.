import { createSlice } from '@reduxjs/toolkit';
import { getDefaultField, removeHint, setHint } from '../helpers/knightHelpers';
import { FieldItem } from '../../games/Knight/types';

export interface KnightState {
    field: FieldItem[][],
    count: number,
    history: number[][],
    lastCoords: [number, number] | [string, string] | [],
    started: boolean,
    time: string,
    win: boolean,
    fail: boolean,
}

const defaultField = getDefaultField();

const initialState: KnightState = {
    field: defaultField,
    count: 0,
    history: [],
    lastCoords: [],
    started: false,
    time: '',
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
                state.started = false;
                return;
            }
            const history = state.history;
            history.push([row, col]);
            state.history = history;
            const hintField = setHint([row, col], newField);
            state.field = hintField || newField;
            if (!hintField) {
                state.fail = true;
                state.started = false;
            }
            state.lastCoords = [row, col];
        },
        onUndoMove: (state) => {
            const [row, col] = state.history.pop();
            state.field[row][col].value = 0;
            state.count--;
            state.lastCoords = [row, col];
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
        onStartGame: (state) => {
            state.started = true;
        },
        restart: (state) => {
            for (let key in initialState) {
                Object.assign(state, {[key]: initialState[key as keyof KnightState]});
            }
            state.started = true;
        },
        onLoadGame: (state, action) => {
            const loadData = action.payload;
            for (let key in state) {
                Object.assign(state, {[key]: loadData[key] || initialState[key as keyof KnightState]});
            }
            state.started = true;
        },
        startTimer: (state) => {
            state.time = '00:00:00';
        },
        resetTimer: (state) => {
            state.time = initialState.time;
        },
        saveTimer: (state, action) => {
            action.payload !== '00:00:00' && (state.time = action.payload);
        },
    },
})

// todo убрать дубли в помощниках
export const { onStartGame, saveTimer, startTimer, resetTimer, onNextMove, setWrongMove, removeWrongMove, onUndoMove, restart, onLoadGame } = knightSlice.actions;

export default knightSlice.reducer;
