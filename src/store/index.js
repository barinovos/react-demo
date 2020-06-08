import { applyMiddleware, createStore } from 'redux'
// Logger with default options
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../reducers'
import rootSaga from '../sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(logger, sagaMiddleware))

// then run the saga
sagaMiddleware.run(rootSaga)

export default store
