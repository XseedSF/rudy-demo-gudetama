import types from './types'
import actions from './actions'

// routes map
export default {
	[types.HOME]: { path: '/' },
	[types.EVENT]: { path: '/event/:id' },
	[types.NEW_EVENT]: { path: '/newevent' },
}
