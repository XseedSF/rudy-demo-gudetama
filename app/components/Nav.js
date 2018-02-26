import React from 'react';
import PropTypes from 'prop-types'
import Link from 'redux-first-router-link';
import { routerTypes } from '../ducks/router'


const Nav = ({ redirectToBacon, redirectToBacon3,...props}) => (
  <nav className='nav'>
    <Link to="/">Home</Link>
    <Link to="/smartphone">Smartphone</Link>
    <div className='drop'>
      <a href="javascript:void(0)" className="drop-btn">Bacon</a>
      <nav className='drop-content'>
        <Link to="/bacon/1">Bacon 1</Link>
        <Link to={{ type: routerTypes.BACON, payload: { id: 2 } }}>Bacon 2</Link>
        <a href="javascript:void(0)" onClick={redirectToBacon3}>Bacon 3</a>
      </nav>
    </div>
  </nav>
);

Nav.propTypes = {
  redirectToBacon: PropTypes.func,
  redirectToBacon3: PropTypes.func,
};

export default Nav;
