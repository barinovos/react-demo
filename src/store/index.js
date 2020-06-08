import { applyMiddleware, createStore } from 'redux'
// Logger with default options
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const store = createStore(rootReducer, applyMiddleware(...[logger, thunk]))

export default store
