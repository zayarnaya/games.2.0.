import React, { FC, StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';

import './App.scss';
import './assets/styles/index.scss';
import { Spinner } from './views/components/Spinner/Spinner';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { router } from './router/router';

export const App: FC = () => {
	return (
		<StrictMode>
			<Provider store={store}>
				<RouterProvider router={router} fallbackElement={<Spinner />} />
			</Provider>
		</StrictMode>
	);
};

export default App;
