import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { store } from './store/store.ts';
import { router } from './router/router.tsx';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,);
