import { CHANGE_TOGGLE, GET_MENU } from '../createAction.js'

export const toggle = (state = false, action) => {
	switch(action.type){
		case CHANGE_TOGGLE:
			return !state
		default: 
			return state
	}
}

export const sideMenu = (state = [], action) => {
	switch(action.type){
		case GET_MENU:
			return action.data
		default:
			return state
	}
}