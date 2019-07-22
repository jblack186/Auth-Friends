import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import reducer from './reducer';



const logger = (store) => (next) => (action) => {
	console.log('Prev State', store.getState())
	console.log('Action', action)
	
	// moves us to the next middleware function
	next(action)

	console.log('New State', store.getState())
}

const store = createStore(
	reducer,
	// compose multiple middleware flows together into one flow
	compose(
		// our custom middleware
		applyMiddleware(thunk, logger),
		// redux dev tools middleware
		
	),
)


ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root'),
)

