import React, { FC, StrictMode, Suspense } from 'react';
import { BrowserRouter, Outlet, Route, RouterProvider, Routes } from 'react-router-dom';

import './App.scss';
import './assets/styles/index.scss';
import { Spinner } from './views/components/Spinner/Spinner';
import { Sidebar } from './views/components/Sidebar/Sidebar/Sidebar';
import { MainContentWrapper } from './views/layouts/MainContentWrapper/MainContentWrapper';
import { Line } from './games/Line/Line';
import { Knight } from './games/Knight/Knight';
import { menuLinks } from './consts/menuLinks';
import { Header } from './views/components/Header/Header';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Tetris } from './games/Tetris/Tetris';
import { router } from './router/router';

export const App: FC = () => {
	return (<>
						<Header />
					<MainContentWrapper>
						<Sidebar links={menuLinks} />
						<Outlet />

					</MainContentWrapper>
	</>


	);
};

