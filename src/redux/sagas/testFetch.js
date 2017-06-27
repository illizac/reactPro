import { takeEvery } from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import { getTestData } from '../../fetch'
import { startRe, successRe } from '../createAction.js'

export function* incrementAsync() {
  	yield new Promise(resolve => setTimeout(resolve, 1000))
  	yield put(startRe())
  	let data = yield call(getTestData)
  	yield put(successRe(data.data.children))
}

export function* watchIncrementAsync() {
  yield* takeEvery('INCREMENT_ASYNC', incrementAsync)
}
