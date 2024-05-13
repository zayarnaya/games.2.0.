import { configureStore } from '@reduxjs/toolkit';
import lineReducer from './slices/LineSlice';
import knightReducer from './slices/KnightSlice';

export const store = configureStore({
  reducer: {
    line: lineReducer,
    knight: knightReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
