import { toggle, sideMenu } from './siderToggleReducer.js'
import { isFetching, getUserData, getCharacterData } from './fetchReducer.js'

export default (state = {}, action) => {
	return {
		collapsed: toggle(state.collapsed, action),
		isFetching: isFetching(state.isFetching, action),
		userdata: getUserData(state.data, action),
		characterdata: getCharacterData(state.data, action),
		sideMenu: sideMenu(state.sideMenu, action),
	}
}