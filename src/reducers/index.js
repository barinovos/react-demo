import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import loading from './loading'
import error from './error'

export default combineReducers({
  todos,
  visibilityFilter,
  loading,
  error,
})
