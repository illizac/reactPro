//commonAction
export const CHANGE_TOGGLE = 'CHANGE_TOGGLE'
export const START_POST = 'START_POST'

//-----------------------------------------------------------------------------------------------------------------------//
//fetchAction
export const GET_MENU = 'GET_MENU'
export const FETCH_USER_TABLE = 'FETCH_USER_TABLE'
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
export const FETCH_CHARACTER_TABLE = 'FETCH_CHARACTER_TABLE'
export const FETCH_CHARACTER_SUCCESS = 'FETCH_CHARACTER_SUCCESS'

export const getMenu = json => ({
	type: GET_MENU,
	data: json
})
