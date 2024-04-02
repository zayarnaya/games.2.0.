import React, { StrictMode, Suspense } from 'react';
import {
	BrowserRouter, Route, Routes
  } from "react-router-dom";


import './App.scss';
import './assets/styles/index.scss';
import { Spinner } from './views/components/Spinner/Spinner';
import { Main } from './views/layouts/Main/Main';
import { Sidebar } from './views/components/Sidebar/Sidebar/Sidebar';
import { MainContentWrapper } from './views/layouts/MainContentWrapper/MainContentWrapper';
import { Line } from './games/Line/Line';
import { Knight } from './games/Knight/Knight';
import { menuLinks } from './consts/menuLinks';

const App = () => {
	return (
		<StrictMode>
			<div className='header'>ЗДЕСЬ ХЭДЕР</div>
			<MainContentWrapper>
				<BrowserRouter>
						<Sidebar links={menuLinks} />
						<Suspense fallback={<Spinner />}>
							<Routes>
								<Route path='/' element={<Main />} />
								<Route path='/line' element={<Line />} />
								<Route path='/knight' element={<Knight />} />
							</Routes>
						</Suspense>
					</BrowserRouter>
			</MainContentWrapper>
		</StrictMode>
	);
};

export default App;
