import React, { StrictMode } from 'react';
import { Container } from 'react-dom';
import { Root, createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from './App';
import { store } from './redux/store';

const rootContainer = document.getElementById('root');

if (!rootContainer) {
	console.error('Элемент с id "root" не найден');
	throw new Error('Root container not found');
}
const root: Root = createRoot(rootContainer);

const basename = process.env.NODE_ENV === 'production' ? '/Ingenium-Movies' : '/';

root.render(
	<StrictMode>
		<Provider store={store}>
			<Router basename={basename}>
				<App />
			</Router>
		</Provider>
	</StrictMode>
);
