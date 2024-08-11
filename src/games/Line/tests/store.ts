import { combineReducers, configureStore } from '@reduxjs/toolkit'
import lineReducer from '../../../store/slices/LineSlice';
// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
  line: lineReducer
})
export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
