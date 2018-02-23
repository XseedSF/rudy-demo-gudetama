import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

const App = ({ children, ...props }) => (
  <div>
    <Header></Header>
    <main>
    { children }
    </main>
    <Footer></Footer>
  </div>
);

App.propTypes = {
  children: PropTypes.element
}

export default App;