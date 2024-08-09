import React, { StrictMode, Suspense } from 'react';
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
import { Tag } from './games/Tag/Tag';
import { Dots } from './games/Dots/Dots';

const App = () => {
	return (
		<StrictMode>
			<Provider store={store}>
				<BrowserRouter basename={process.env.GAMES_BASE_URL}>
					<Header />
					<MainContentWrapper>
						<Sidebar links={menuLinks} />
						<Suspense fallback={<Spinner />}>
							<Routes>
								{/* <Route path='/' element={<Line />} />
								<Route path='/knight' element={<Knight />} />
								<Route path='/tetris' element = {<Tetris />} /> */}
								{/* <Route path='/' element={<Tetris />} /> */}
								{/* <Route path='/' element={<Tag />} />
								 */}
								<Route path='/' element={<Dots />} />
							</Routes>
						</Suspense>
					</MainContentWrapper>
				</BrowserRouter>
			</Provider>
		</StrictMode>
	);
};

export default App;
