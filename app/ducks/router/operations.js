import actions from './actions'

const sideEffect = () => new Promise(resolve => setTimeout(()=> resolve(0), 2000))

export default {
	home: actions.home,
	bacon: actions.bacon,
	smartphone: async (dispatch, getState) => {
		const ok = await sideEffect();
		dispatch(actions.sideEffect());
	},
}