//commonAction

export const CHANGE_TOGGLE = 'CHANGE_TOGGLE'

export const START_POST = 'START_POST'
export const SUCCESS_POST = 'SUCCESS_POST'

export const toggle = () => ({
	type: CHANGE_TOGGLE
})

export const startRe = () => ({
	type: START_POST
})

export const successRe = json => ({
	type: SUCCESS_POST,
	data: json
})

//-----------------------------------------------------------------------------------------------------------------------//
//fetchAction

export const INCREMENT_ASYNC = 'INCREMENT_ASYNC'
export const GET_MENU = 'GET_MENU'

export const testFetch = () => ({
	type: INCREMENT_ASYNC
})

export const getMenu = json => ({
	type: GET_MENU,
	data: json
})
