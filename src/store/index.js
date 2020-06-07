import { applyMiddleware, createStore } from 'redux'
// Logger with default options
import logger from 'redux-logger'
// our custom provider middleware
import providerMiddleware, { getDefaultState } from './providerMiddleware'
import successMiddleware from './successMiddleware'
import rootReducer from '../reducers'

const store = createStore(
  rootReducer,
  getDefaultState(),
  applyMiddleware(...[logger, providerMiddleware, successMiddleware])
)

export default store
