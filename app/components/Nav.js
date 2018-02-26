import React from 'react';
import PropTypes from 'prop-types'
import Link from 'redux-first-router-link';
import { routerTypes } from '../ducks/router'


const Nav = ({ redirectToBacon, redirectToBacon3,...props}) => (
  <ul className='nav'>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/smartphone">Smartphone</Link></li>
    <li className='drop'>
      <a href="javascript:void(0)" className="drop-btn">Bacon</a>
      <ul className='drop-content'>
        <li><Link to="/bacon/1">Bacon 1</Link></li>
        <li><Link to={{ type: routerTypes.BACON, payload: { id: 2 } }}>Bacon 2</Link></li>
        <li><a href="javascript:void(0)" onClick={redirectToBacon3}>Bacon 3</a></li>
      </ul>
    </li>
  </ul>
);

Nav.propTypes = {
  redirectToBacon: PropTypes.func,
  redirectToBacon3: PropTypes.func,
};

export default Nav;
