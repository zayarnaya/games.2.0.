import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Knight } from '../games/Knight/Knight';
import { Line } from '../games/Line/Line';
import { Tetris } from '../games/Tetris/Tetris';
import { Main } from '../pages';

const basename = process.env.GAMES_BASE_URL;

export const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <Main />,
			children: [
				{
					path: '/',
					element: <Line />,
				},
				{
					path: 'knight',
					element: <Knight />,
				},
				{
					path: 'tetris',
					element: <Tetris />,
				},
				{
					path: '*',
					element: <p>NO SUCH PAGE</p>,
				},
			],
		},
	],
	{ basename }
);
