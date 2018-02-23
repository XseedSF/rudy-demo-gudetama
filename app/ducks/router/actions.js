import types from './types'

export default {
	home: () => ({ type: types.HOME }),
	bacon: (id) => ({ type: types.BACON, payload: { id } }),
	smartphone: () => ({ type: types.SMARTPHONE }),
}
