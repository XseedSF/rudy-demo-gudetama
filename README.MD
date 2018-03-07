# redux-first-router@rudy Demo

Welcome to this redux-first-router@rudy demo.
The purpose of this site is to test differents ways to perform the routing of a React/Redux application using the package mentioned above.

In order to make this POC more fun the site is Gudetama themed, a cute japanese character (⊃◜⌓◝⊂)

## Navigation
```jsx
// Links can be used providing a relative path
// this allows the use of SEO links
<Link to='/'>Home</Link>
<Link to='/smartphone'>Smartphone</Link>

<Link to='/bacon/1'>Bacon 1</Link>
<Link to={{ type: routerTypes.BACON, payload: { id: 2 } }}>Bacon 2</Link>
<a onClick={redirectToBacon3} href='javascript:void(0)'>Bacon 3</a>

const mapDispatchToProps = dispatch => ({
  redirectToBacon3: () => dispatch({type: routerTypes.BACON, payload: { id: 3 }}),
});
```

## Router
### Reducer
```javascript
const routesMap = {
  [types.HOME]: { path: '/' },
  [types.BACON]: { path: '/bacon/:id' },
  // Smartphone uses a thunk to perform side effects
  [types.SMARTPHONE]: { path: '/smartphone', thunk: operations.smartphone },
}

const operations = {
  // Inside the thunk we can perform async operations and dispatch side effects
  smartphone: async (dispatch, getState) => {
    const ok = await sideEffect();
    // the actions to dispatch doesn't need to have a path
    dispatch({ type: types.SIDE_EFFECT });
  },
}

const { 
	reducer,
	middleware,
	enhancer
 } = connectRoutes(routesMap, config);
```
### Component
```javascript
const pagesMap = {
  [routerTypes.HOME]: HomeContainer,
  [routerTypes.SMARTPHONE]: ImageContainer,
  [routerTypes.BACON]: ImageContainer,
}

const PageComponent = (routerType = routerTypes.HOME) => {
  const Page = pagesMap[routerType]
  return Page ? <Page /> : null
}
```