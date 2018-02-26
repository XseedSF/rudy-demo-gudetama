import { connectRoutes } from 'redux-first-router';
import types from './types'
import operations from './operations'

const { DEPLOY_PATH } = process.env;
const config = DEPLOY_PATH ? { basename: SURA_LEADS_DEPLOY_PATH } : {};

// routes map
const routesMap = {
	[types.HOME]: { path: '/' },
	[types.BACON]: { path: '/bacon/:id' },
	[types.SMARTPHONE]: { path: '/smartphone', thunk: operations.smartphone },
}

const { 
	reducer,
	middleware,
	enhancer
 } = connectRoutes(routesMap, config);

 export {
   reducer, middleware, enhancer
 }