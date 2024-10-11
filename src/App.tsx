import React, { FC, StrictMode, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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

export const App: FC = () => {
	return (
		<StrictMode>
			<Provider store={store}>
				{/* <RouterProvider router={router} /> */}
				<BrowserRouter basename={process.env.GAMES_BASE_URL}>
					<Header />
					<MainContentWrapper>
						<Sidebar links={menuLinks} />
						{/* <Outlet /> */}
						<Suspense fallback={<Spinner />}>
							<Routes>
								<Route path='/' element={<Line />} />
								<Route path='/knight' element={<Knight />} />
								<Route path='/tetris' element={<Tetris />} />
							</Routes>
						</Suspense>
					</MainContentWrapper>
				</BrowserRouter>
			</Provider>
		</StrictMode>
	);
};

export default App;
