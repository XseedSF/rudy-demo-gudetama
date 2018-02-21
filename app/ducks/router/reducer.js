import { connectRoutes } from 'redux-first-router';
import routesMap from './operations';

const { DEPLOY_PATH } = process.env;
const config = DEPLOY_PATH ? { basename: SURA_LEADS_DEPLOY_PATH } : {};

const { 
	reducer, 
	middleware, 
	enhancer
 } = connectRoutes(routesMap, config);

 export {
   reducer, middleware, enhancer
 }