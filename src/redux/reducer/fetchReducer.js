import { START_POST, FETCH_CHARACTER_SUCCESS, FETCH_USER_SUCCESS } from '../createAction.js'

export const isFetching = (state = false, action) => {
	switch(action.type){
		case START_POST:
			return true
		case FETCH_USER_SUCCESS:
		case FETCH_CHARACTER_SUCCESS:
			return false
		default:
			return true
	}
}

export const getUserData = (state = [], action) => {
	switch(action.type){
		case FETCH_USER_SUCCESS:
			return action.data
		default: 
			return state
	}
}

export const getCharacterData = (state = [], action) => {
	switch(action.type){
		case FETCH_CHARACTER_SUCCESS:
			return action.data
		default: 
			return state
	}
}