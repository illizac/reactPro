import { takeEvery, takeLatest } from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import { getTestData } from '../../fetch'
import { startRe, successRe, menu } from '../createAction.js'

function* incrementAsync() {
  	yield new Promise(resolve => setTimeout(resolve, 1000))
  	yield put(startRe())
  	let data = yield call(getTestData)
  	yield put(successRe(data.data.children))
}

export function* watchIncrementAsync() {
  yield* takeEvery('INCREMENT_ASYNC', incrementAsync)
}

const testMenu = [
    {
        type: 'user',
        path: '/',
        text: '设置'
    },
    {
        type: 'login',
        path: '/',
        text: '商铺管理'
    },
    {
        type: 'upload',
        path: '/login',
        text: '用户管理'
    }
]

export function* test() {
  yield put(menu(testMenu))
}


