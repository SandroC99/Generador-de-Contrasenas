import React from 'react';
import { PassGen } from './components/PassGen';
import './App.css';
import { Provider } from 'react-redux';
import store from './app/store';

export const App = () => {
	return (
		<>
			<Provider store={store}>
				<div className='App'>
					<PassGen />
				</div>
			</Provider>
		</>
	);
};
