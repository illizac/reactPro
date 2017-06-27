import { getTestData } from '../fetch'

export const INCREMENT_ASYNC = 'INCREMENT_ASYNC'
export const CHANGE_TOGGLE = 'CHANGE_TOGGLE'

export const toggle = () => {
	return {
		type: CHANGE_TOGGLE
	}
}

export const START_POST = 'START_POST'
export const SUCCESS_POST = 'SUCCESS_POST'

export const startRe = () => {
	return {
		type: START_POST
	}
}

export const successRe = json => {
	return {
		type: SUCCESS_POST,
		data: json
	}
}

export const testFetch = () => {
	return {
		type: 'INCREMENT_ASYNC'
	}
}

export const GET_MENU = 'GET_MENU'

export const menu = json => {
	return {
		type: GET_MENU,
		data: json
	}
}