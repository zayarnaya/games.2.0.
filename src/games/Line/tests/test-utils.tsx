// import React, { PropsWithChildren } from 'react'
// import { render } from '@testing-library/react'
// import type { RenderOptions } from '@testing-library/react'
// import { configureStore } from '@reduxjs/toolkit'
// import { Provider } from 'react-redux'

// import type { AppStore, RootState } from './store'
// import { setupStore } from './store'
// // As a basic setup, import your same slice reducers
// import userReducer from './userSlice'

// // This type interface extends the default options for render from RTL, as well
// // as allows the user to specify other things such as initialState, store.
// interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
//   preloadedState?: Partial<RootState>
//   store?: AppStore
// }

// export function renderWithProviders(
//   ui: React.ReactElement,
//   extendedRenderOptions: ExtendedRenderOptions = {}
// ) {
//   const {
//     preloadedState = {},
//     // Automatically create a store instance if no store was passed in
//     store = setupStore(preloadedState),
//     ...renderOptions
//   } = extendedRenderOptions

//   const Wrapper = ({ children }: PropsWithChildren) => (
//     <Provider store={store}>{children}</Provider>
//   )

//   // Return an object with the store and all of RTL's query functions
//   return {
//     store,
//     ...render(ui, { wrapper: Wrapper, ...renderOptions })
//   }
// }


import React, { PropsWithChildren } from 'react'
import { render } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'
import { Provider } from 'react-redux'

import { setupStore } from './store'
import type { AppStore, RootState } from './store'

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>
  store?: AppStore
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
