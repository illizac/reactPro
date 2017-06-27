import { connect } from 'react-redux'

import { toggle, testFetch } from './createAction.js'

import hm from '../pages/home.jsx'

export const Home = connect(state => ({
	collapsed: state.collapsed,
	sideMenu: state.sideMenu
}), dispatch => ({
	onToggle: () => {
		dispatch(toggle())
		dispatch({
			type: 'INCREMENT_ASYNC'
		})
	}
	// testFetch: () => {
	// 	dispatch(testFetch())
	// }
}))(hm)