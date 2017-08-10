import { takeLatest } from 'redux-saga'
import { put, call, take } from 'redux-saga/effects'
import { getUserTable, getCharacterTable } from '../../fetch'
import { START_POST, FETCH_USER_TABLE, FETCH_USER_SUCCESS, FETCH_CHARACTER_TABLE, FETCH_CHARACTER_SUCCESS } from '../createAction.js'

function* fetch(action, fetchApi) {
  	yield put({
  		type: START_POST
  	})
  	let data = yield call(fetchApi)
	yield put({
		type: action,
		data: data.dataSource
	})
}


export function* fetchUserTableData(){
	yield takeLatest(FETCH_USER_TABLE, fetch, FETCH_USER_SUCCESS, getUserTable)
}

export function* fetchCharacterTableData(){
	yield takeLatest(FETCH_CHARACTER_TABLE, fetch, FETCH_CHARACTER_SUCCESS, getCharacterTable)
}
