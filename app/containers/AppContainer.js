import React from 'react';
import { connect } from "react-redux";
import routerTypes from '../ducks/router/types';
import HomeContainer from './HomeContainer';

const pagesMap = {
  [routerTypes.HOME]: HomeContainer,
}

const PageComponent = ({ page = routerTypes.HOME }) => {
  const Page = pagesMap[page]
  return Page ? <Page /> : null
}

const mapState = ({ location }) => ({ page: location.type })

export default connect(mapState)(PageComponent);
