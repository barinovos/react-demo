import { applyMiddleware, createStore } from 'redux'
// Logger with default options
import logger from 'redux-logger'
// our custom provider middleware
import providerMiddleware, { getDefaultState } from './providerMiddleware'
import rootReducer from '../reducers'

const store = createStore(
  rootReducer,
  getDefaultState(),
  applyMiddleware(...[logger, providerMiddleware])
)

export default store
