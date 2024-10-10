import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import {App} from "../App";
import { Knight } from '../games/Knight/Knight';
import { Line } from '../games/Line/Line';
import { Tetris } from '../games/Tetris/Tetris';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Line />,
      },
      {
        path: "knight",
        element: <Knight />,
      },
      {
        path: 'tetris',
        element: <Tetris />,

      },
      {
        path: "*",
        element: <p>NO SUCH PAGE</p>,
      },
    ],
  },
]);
