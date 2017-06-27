import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
// import thunk from 'redux-thunk'

import reducer from './reducer'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

export default createStore(reducer, applyMiddleware(logger, sagaMiddleware))

sagas.map(val => {
	sagaMiddleware.run(val)
})