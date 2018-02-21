import routerTypes from './types';
import { reducer, middleware, enhancer } from './reducer';

export default {
	routerReducer: reducer,
	routerMiddleware: middleware,
	routerEnhancer: enhancer,
	routerTypes
};