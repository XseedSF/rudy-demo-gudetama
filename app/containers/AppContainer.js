import React from 'react';
import { connect } from "react-redux";
import routerTypes from '../ducks/router/types';
import App from '../components/App';
import HomeContainer from './HomeContainer';
import ImageContainer from './ImageContainer';

const pagesMap = {
  [routerTypes.HOME]: HomeContainer,
  [routerTypes.SMARTPHONE]: ImageContainer,
  [routerTypes.BACON]: ImageContainer,
}

const PageComponent = (routerType = routerTypes.HOME) => {
  const Page = pagesMap[routerType]
  return Page ? <Page /> : null
}

const mapState = ({ location }) => ({ 
  children: PageComponent(location.type),
  page: location.type
 })

export default connect(mapState)(App);
