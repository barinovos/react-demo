import { combineReducers } from 'redux'
import todos from './todos_old'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  todos,
  visibilityFilter,
})
