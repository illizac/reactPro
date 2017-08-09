import { takeEvery } from 'redux-saga'
import { put, call, take } from 'redux-saga/effects'
import { getTestData } from '../../fetch'
import { startRe, successRe, INCREMENT_ASYNC } from '../createAction.js'

function* fetch() {
  	yield put(startRe())
  	let data = yield call(getTestData)
  	yield put(successRe(data.dataSource))
}


export function* watchIncrementAsync(){
	yield takeEvery(INCREMENT_ASYNC, fetch)
}
