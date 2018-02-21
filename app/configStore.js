import * as reducers from './ducks';
import routerDuck from './ducks/router';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

const { routerReducer, routerMiddleware, routerEnhancer } = routerDuck;

const configStore = () => {
	const middlewares = [thunkMiddleware, routerMiddleware];
	if (process.env.NODE_ENV !== 'production') {
		middlewares.push(logger);
	}
	const middleware = applyMiddleware(...middlewares);
	
	const rootReducer = combineReducers({
		location: routerReducer,
		...reducers, 
	});


	const store = createStore(
		rootReducer,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
		compose(routerEnhancer, middleware)
	);

	return store;
}

export default configStore;