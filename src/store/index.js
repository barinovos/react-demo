import { applyMiddleware, createStore } from 'redux'
// Logger with default options
import logger from 'redux-logger'
import rootReducer from '../reducers'

const store = createStore(rootReducer, applyMiddleware(logger))

export default store
