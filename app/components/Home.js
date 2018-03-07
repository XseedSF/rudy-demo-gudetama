import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { dark } from 'react-syntax-highlighter/styles/prism';

const Home = (props) => (
  <div className='home'>
    <p className='bold'>redux-first-router@rudy Demo</p>
    <section>
    <p>Welcome to this redux-first-router@rudy demo.</p>
    <p>The purpose of this site is to test differents ways to perform the routing of a React/Redux application using the package mentioned above.</p>
    </section>
    <section>
    <p>In order to make this POC more fun the site is themed after Gudetama, a cute japanese character (⊃◜⌓◝⊂)</p>
    </section>
    <section>
    <div className='code-snippet'>    
    <p className='bold'>Navigation</p>
    <SyntaxHighlighter language='javascript' style={dark}>{
         "// Links can be used providing a relative path"
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
       + "\n"
       + "\nconst { "
       + "\n	reducer,"
       + "\n	middleware,"
       + "\n	enhancer"
       + "\n} = connectRoutes(routesMap, config);"
    }</SyntaxHighlighter>
    </div>
    <div className='code-snippet'>    
    <p className='bold'>Router</p>
    <p className='bold sub'>Reducer</p>
     <SyntaxHighlighter language='javascript' style={dark}>{
          "const routesMap = {"
        + "\n  [types.HOME]: { path: '/' },"
        + "\n  [types.BACON]: { path: '/bacon/:id' },"
        + "\n  // Smartphone uses a thunk to perform side effects"
        + "\n  [types.SMARTPHONE]: { path: '/smartphone', thunk: operations.smartphone },"
        + "\n}"
        + "\n"
        + "\nconst operations = {"
        + "\n  // Inside the thunk we can perform async operations and dispatch side effects"
        + "\n  smartphone: async (dispatch, getState) => {"
        + "\n    const ok = await sideEffect();"
        + "\n    // the actions to dispatch doesn't need to have a path"
        + "\n    dispatch({ type: types.SIDE_EFFECT });"
        + "\n  },"
        + "\n}"
    }</SyntaxHighlighter>
    <p className='bold sub'>Component</p>    
    <SyntaxHighlighter language='javascript' style={dark}>{
        + "const pagesMap = {"
        + "\n  [routerTypes.HOME]: HomeContainer,"
        + "\n  [routerTypes.SMARTPHONE]: ImageContainer,"
        + "\n  [routerTypes.BACON]: ImageContainer,"
        + "\n}"
        + "\n"
        + "\nconst PageComponent = (routerType = routerTypes.HOME) => {"
        + "\n  const Page = pagesMap[routerType]"
        + "\n  return Page ? <Page /> : null"
        + "\n}"
    }</SyntaxHighlighter>
    </div>
    </section>
  </div>
)

export default Home;
