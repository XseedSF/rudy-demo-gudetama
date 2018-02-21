import React from "react";
import { Provider } from "react-redux";
import AppContainer from '../../containers/AppContainer';

const Root = ({ store }) => {
	return(
    <Provider store={store}>
      <AppContainer/>
    </Provider>
 );
}

export default Root;
