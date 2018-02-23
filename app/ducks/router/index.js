import routerTypes from './types';
import routerOperations from './operations';
import { reducer, middleware, enhancer } from './reducer';

export default {
	routerReducer: reducer,
	routerMiddleware: middleware,
	routerEnhancer: enhancer,
};

export {
	routerOperations,
	routerTypes,
}