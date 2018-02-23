import React from 'react';
import PropTypes from 'prop-types'
import Link from 'redux-first-router-link';
import face from '../styles/gudetama-sad-face.png';


const Nav = ({ redirectToBacon ,...props}) => (
  <ul className='nav'>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/smartphone">Smartphone</Link></li>
    <li className='drop'>
      <a href="javascript:void(0)" className="drop-btn">Bacon</a>
      <ul className='drop-content'>
        <li><Link to="/bacon/1">Bacon 1</Link></li>
        <li><Link to={redirectToBacon(2)}>Bacon 2</Link></li>
        <li><Link to={redirectToBacon(3)}>Bacon 3</Link></li>
      </ul>
    </li>
  </ul>
);

Nav.propTypes = {
  redirectToBacon: PropTypes.func
};

export default Nav;
