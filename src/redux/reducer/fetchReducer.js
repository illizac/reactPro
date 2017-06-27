import { START_POST, SUCCESS_POST } from '../createAction.js'

export const isFetching = (state = false, action) => {
	switch(action.type){
		case START_POST:
			return true
		case SUCCESS_POST:
			return false
		default:
			return state
	}
}

export const getData = (state = {}, action) => {
	switch(action.type){
		case SUCCESS_POST:
			return action.data
		default: 
			return state
	}
}