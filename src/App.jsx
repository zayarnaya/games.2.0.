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

const App = () => {
	return (
		<StrictMode>
			<BrowserRouter basename={process.env.REACT_APP_BASE_URL}>
			{/* <BrowserRouter> */}
				<Header />
				<MainContentWrapper>
					<Sidebar links={menuLinks} />
					<Suspense fallback={<Spinner />}>
						<Routes>
							<Route path='/' element={<Line />} />
							<Route path='/knight' element={<Knight />} />
						</Routes>
					</Suspense>
				</MainContentWrapper>
			</BrowserRouter>
		</StrictMode>
	);
};

export default App;
