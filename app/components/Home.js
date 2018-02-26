import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { dark } from 'react-syntax-highlighter/styles/prism';

const Home = (props) => (
  <div>
    <p className='bold'>Welcome to this redux-first-router@rudy demo.</p>
    <p>The purpose of this site is to test differents ways to perform the routing of a React/Redux application using the package mentioned above.</p>
    <p>Everything else is just for fun (⊃◜⌓◝⊂)</p>
    <div className='code-snippet'>
    <SyntaxHighlighter language='javascript' style={dark}>{
         "// Links can be used providing a realtive path"
       + "\n// this allows the use of SEO links"
       + "\n<Link to='/'>Home</Link>"
       + "\n<Link to='/smartphone'>Smartphone</Link>"
       + "\n"
       + "\n<Link to='/bacon/1'>Bacon 1</Link>"
       + "\n<Link to={{ type: routerTypes.BACON, payload: { id: 2 } }}>Bacon 2</Link>"
       + "\n<a onClick={redirectToBacon3} href='javascript:void(0)'>Bacon 3</a>"
       + "\n"
       + "\nconst mapDispatchToProps = dispatch => ({"
       + "\n  redirectToBacon3: () => dispatch({type: routerTypes.BACON, payload: { id: 3 }}),"
       + "\n});"
    }</SyntaxHighlighter>
    </div>
  </div>
)

export default Home;
