import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducer.js'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

export default createStore(reducer, applyMiddleware(logger, sagaMiddleware))

sagas.map(val => {
	sagaMiddleware.run(val)
})