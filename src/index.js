import React from 'react';
import ReactDOM from 'react-dom';

import LoginPage from './Login';
import RegisterPage from './Register';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import registerServiceWorker from './registerServiceWorker';

const store= createStore(
		(state = {}) => state,
		applyMiddleware(thunk)
	)
ReactDOM.render(
	<Provider store={store}>
		<RegisterPage />
	</Provider>, document.getElementById('root'));
registerServiceWorker();
