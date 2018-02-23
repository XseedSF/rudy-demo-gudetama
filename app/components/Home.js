import React from 'react';

const Home = (props) => (
  <div>
    <p className='bold'>Welcome to this redux-first-router@rudy demo.</p>
    <p>The purpose of this site is to test differents ways to perform the routing of a React/Redux application using the package mentioned above.</p>
    <p>Everything else is just for fun (⊃◜⌓◝⊂)</p>
    <div className='code-snippet'>
      <p>&lt;ul className='nav'></p>
      <p>  &lt;li>&lt;Link to="/">Home&lt;/Link>&lt;/li></p>
      <p>  &lt;li>&lt;Link to="/smartphone">Smartphone&lt;/Link>&lt;/li></p>
      <p>  &lt;li className='drop'></p>
      <p>    &lt;a href="javascript:void(0)" className="drop-btn">Bacon&lt;/a></p>
      <p>    &lt;ul className='drop-content'></p>
      <p>      &lt;li>&lt;Link to="/bacon/1">Bacon 1&lt;/Link>&lt;/li></p>
      <p>      &lt;li>&lt;Link to={'{'}redirectToBacon(2){'}'}>Bacon 2&lt;/Link>&lt;/li></p>
      <p>      &lt;li>&lt;Link to={'{'}redirectToBacon(3){'}'}>Bacon 3&lt;/Link>&lt;/li></p>
      <p>    &lt;/ul></p>
      <p>  &lt;/li></p>
      <p>&lt;/ul></p>
    </div>
  </div>
)

export default Home;
