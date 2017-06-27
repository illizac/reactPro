import { toggle, sideMenu } from './reducers/siderToggleReducer.js'
import { isFetching, getData, test } from './reducers/fetchReducer.js'

export default (state = {}, action) => {
	return {
		collapsed: toggle(state.collapsed, action),
		isFetching: isFetching(state.isFetching, action),
		data: getData(state.data, action),
		sideMenu: sideMenu(state.sideMenu, action),
	}
}