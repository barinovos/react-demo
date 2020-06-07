import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import loading from './loading'

export default combineReducers({
  todos,
  visibilityFilter,
  loading,
})
