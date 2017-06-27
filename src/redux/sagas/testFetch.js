import { takeEvery } from 'redux-saga'
import { put, call, take } from 'redux-saga/effects'
import { getTestData } from '../../fetch'
import { startRe, successRe, INCREMENT_ASYNC } from '../createAction.js'

export function* watchIncrementAsync() {
	yield take(INCREMENT_ASYNC) //take 之后 saga 会被回收, 只会执行一次 返回值是当前监听的 action
  	yield new Promise(resolve => setTimeout(resolve, 1000))
  	yield put(startRe())
  	let data = yield call(getTestData)
  	yield put(successRe(data.data.children))
}

// export function* watchIncrementAsync() {
//   yield* takeEvery( INCREMENT_ASYNC, incrementAsync )
// }
