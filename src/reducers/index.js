import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import loading from './loading'
import error from './error'
import congrats from './congrats'

export default combineReducers({
  todos,
  visibilityFilter,
  loading,
  error,
  congrats,
})
