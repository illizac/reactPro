import { put } from 'redux-saga/effects'
import { menu } from '../createAction.js'

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

export default function* getSideMenu() {
  yield put(menu(testMenu))
}